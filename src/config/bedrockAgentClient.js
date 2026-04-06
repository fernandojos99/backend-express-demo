// config/bedrockAgentClient.js
import { BedrockAgentRuntimeClient } from "@aws-sdk/client-bedrock-agent-runtime";

export const bedrockAgentClient = new BedrockAgentRuntimeClient({
  region: "us-east-1",
});