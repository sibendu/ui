import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: 'All fields are required' 
        });
      }
      
      // In a real app, you would send an email or store the message
      // For now, just return success
      return res.status(200).json({ 
        message: 'Message received successfully'
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        message: 'Failed to process your message'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
