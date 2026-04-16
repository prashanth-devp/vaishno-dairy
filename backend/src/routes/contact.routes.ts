import { Router } from "express";
import { sendMessage } from "../controllers/contact.controller";

const router = Router();

// POST /api/contact - Send a contact form email
router.post("/", sendMessage);

export default router;
