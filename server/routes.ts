import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      console.log("Created new inquiry:", inquiry.id, inquiry.name);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Get all inquiries (for admin dashboard)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllInquiries();
      console.log(`Retrieved ${inquiries.length} inquiries from database`);
      res.json(inquiries);
    } catch (err) {
      console.error("Error fetching inquiries:", err);
      res.status(500).json({ message: "Failed to fetch inquiries" });
    }
  });

  // Delete an inquiry (for admin dashboard)
  app.delete("/api/inquiries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid inquiry ID" });
      }
      await storage.deleteInquiry(id);
      console.log("Deleted inquiry:", id);
      res.status(200).json({ message: "Inquiry deleted successfully" });
    } catch (err) {
      console.error("Error deleting inquiry:", err);
      res.status(500).json({ message: "Failed to delete inquiry" });
    }
  });

  return httpServer;
}
