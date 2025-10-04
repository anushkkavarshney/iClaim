import { OrkesApi } from "@orkes/conductor-javascript";
import dotenv from "dotenv";
dotenv.config();

const client = new OrkesApi({
  keyId: process.env.KEY_ID,
  keySecret: process.env.KEY_SECRET,
  serverUrl: process.env.SERVER_URL,
});

async function testConnection() {
  try {
    const workflows = await client.metadataResource.getAllWorkflows();
    console.log("✅ Connected successfully!");
    workflows.forEach((wf) => console.log("Workflow:", wf.name));
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
  }
}

testConnection();
