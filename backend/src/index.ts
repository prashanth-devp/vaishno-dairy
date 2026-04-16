import express from "express";
import cors from "cors";
import { env } from "./config/env";
import contactRoutes from "./routes/contact.routes";

const app = express();

// Middleware
app.use(
  cors({
    origin: env.FRONTEND_URL,
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start server
app.listen(env.PORT, () => {
  console.log(`\n🚀 Vaishno Dairy Backend running on http://localhost:${env.PORT}`);
  console.log(`📧 Contact emails will be sent to: ${env.RECIPIENT_EMAIL}`);
  console.log(`🌐 Accepting requests from: ${env.FRONTEND_URL}\n`);
});
