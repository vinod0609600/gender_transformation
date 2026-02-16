import express, { type Request, Response } from "express";
import { registerRoutes } from "../server/routes";
import path from "path";
import fs from "fs";
import { createServer } from "http";

const app = express();

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

// Create HTTP server for registerRoutes compatibility
const httpServer = createServer(app);

// Register API routes
registerRoutes(httpServer, app).catch(console.error);

// Serve static files
const publicPath = path.join(__dirname, "../dist/public");
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath, {
    setHeaders: (res, path) => {
      if (path.endsWith(".html")) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
      }
    },
  }));
}

// SPA fallback - serve index.html for all non-API routes
app.use((req: Request, res: Response) => {
  if (!req.path.startsWith("/api")) {
    const indexPath = path.join(publicPath, "index.html");
    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }
  }
  res.status(404).json({ error: "Not found" });
});

export default app;
