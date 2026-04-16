import dotenv from "dotenv";
import path from "path";

// Load .env from the backend root directory
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

interface EnvConfig {
  PORT: number;
  FRONTEND_URL: string;
  RECIPIENT_EMAIL: string;
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_USER: string;
  SMTP_PASS: string;
}

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
  return value;
}

export const env: EnvConfig = {
  PORT: parseInt(process.env.PORT || "5000", 10),
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  RECIPIENT_EMAIL: getEnvVar("RECIPIENT_EMAIL"),
  SMTP_HOST: getEnvVar("SMTP_HOST"),
  SMTP_PORT: parseInt(process.env.SMTP_PORT || "587", 10),
  SMTP_USER: getEnvVar("SMTP_USER"),
  SMTP_PASS: getEnvVar("SMTP_PASS"),
};
