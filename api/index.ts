import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";
import path from "path";
import fs from "fs";

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

// API routes
registerRoutes(app);

// Serve static files
const publicPath = path.join(__dirname, "../dist/public");
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}

// SPA fallback - serve index.html for all other routes
app.use((_req: Request, res: Response) => {
  const indexPath = path.join(publicPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Not found");
  }
});

export default app;
