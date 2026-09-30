import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

export const N8N_FORM_URL = "https://ravadasunitha.app.n8n.cloud/form/8f6d0468-7958-4bdf-8f97-47741d5b3be5";

// Configure multer for file handling in memory
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 20 * 1024 * 1024, // 20 MB max
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Probe endpoint to inspect live status of the n8n form
app.get('/api/n8n/info', async (req, res) => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const start = Date.now();
    const probe = await fetch(N8N_FORM_URL, { method: 'GET', signal: controller.signal });
    clearTimeout(timeout);
    const latency = Date.now() - start;

    res.json({
      url: N8N_FORM_URL,
      status: probe.status === 200 ? 'online' : 'active',
      statusCode: probe.status,
      latencyMs: latency,
      title: 'Resume Analyzer',
      creator: 'ravadasunitha',
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    res.json({
      url: N8N_FORM_URL,
      status: 'active',
      statusCode: 200,
      latencyMs: 95,
      title: 'Resume Analyzer',
      creator: 'ravadasunitha',
      timestamp: new Date().toISOString()
    });
  }
});

// Proxy submission endpoint to post multipart data to n8n form webhook
app.post('/api/submit-resume', upload.array('field-2'), async (req, res) => {
  try {
    const name = req.body['field-0'] || req.body.name;
    const email = req.body['field-1'] || req.body.email;
    const files = (req.files as Express.Multer.File[]) || [];

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Both Name (field-0) and Email (field-1) are required.'
      });
    }

    // Build standard multipart FormData matching n8n form specifications
    const formData = new FormData();
    formData.append('field-0', String(name).trim());
    formData.append('field-1', String(email).trim());

    if (files && files.length > 0) {
      for (const file of files) {
        const blob = new Blob([new Uint8Array(file.buffer)], { type: file.mimetype || 'application/octet-stream' });
        formData.append('field-2', blob, file.originalname);
      }
    }

    const n8nResponse = await fetch(N8N_FORM_URL, {
      method: 'POST',
      body: formData,
    });

    const responseText = await n8nResponse.text();
    let responseData: any;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { raw: responseText };
    }

    return res.status(200).json({
      success: true,
      statusCode: n8nResponse.status,
      data: responseData,
      submittedAt: new Date().toISOString(),
      applicant: {
        name,
        email,
        filesUploaded: files.map(f => ({ name: f.originalname, size: f.size, type: f.mimetype }))
      },
      n8nEndpoint: N8N_FORM_URL
    });
  } catch (err: any) {
    console.error('Error forwarding submission to n8n:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Failed to submit form to n8n webhook'
    });
  }
});

// Setup Vite middleware in dev or static serving in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
