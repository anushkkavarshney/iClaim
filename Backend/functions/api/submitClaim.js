import express from "express";
import multer from "multer";
import { startWorkflow } from "../orkesClient.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/submitClaim", upload.single("file"), async (req, res) => {
  const { claimType, policyNumber, date, description } = req.body;
  const file = req.file;

  // Start Orkes workflow (stub)
  const workflowResult = await startWorkflow({ claimType, policyNumber, date, description, file });

  res.json({ id: workflowResult.workflowId || "C123" });
});

export default router;
