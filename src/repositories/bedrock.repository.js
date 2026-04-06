import { InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import { bedrockClient } from "../config/bedrockClient.js";

export const invokeClaude = async (prompt) => {
  const command = new InvokeModelCommand({
    modelId: "anthropic.claude-3-haiku-20240307-v1:0",
   //modelId: "amazon.titan-text-lite-v1",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 100,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const response = await bedrockClient.send(command);
  const decoded = new TextDecoder().decode(response.body);
  const result = JSON.parse(decoded);

  return result.content[0].text;
};