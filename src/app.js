import express from "express";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import holaRoutes from "./routes/hola.routes.js";
import swaggerSpec from "./config/swagger.js";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
// import { bedrockClient } from "./config/bedrockClient.js";
import { bedrockAgentClient } from "./config/bedrockAgentClient.js";
import { InvokeAgentCommand } from "@aws-sdk/client-bedrock-agent-runtime";




const app = express();

// Middleware para parsear el body de las solicitudes como JSON
// Internamente hace lo siguiente:
// 1 recibe el body
// 2 detecta JSON
// 3 ejecuta JSON.parse()
// 4 guarda el resultado en req.body
// app.use(express.json());

app.use(cors()); // Habilitar CORS para todas las rutas
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/swagger.json", (req, res) => {
  res.json(swaggerSpec);
});


// app.use("/api", userRoutes);
// app.use("/api", postRoutes);
// app.use("/api",holaRoutes);


app.use("/", userRoutes);
app.use("/", postRoutes);
app.use("/",holaRoutes);

app.post("/chat", async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    const command = new InvokeAgentCommand({
      //agentId: "TU_AGENT_ID",
      agentId: "WRIA6PRGQY",
      //agentAliasId: "TU_ALIAS_ID",
      agentAliasId: "50EIW8PBIP",

      sessionId: sessionId || "usuario-123",
      inputText: message,
    });
    const response = await bedrockAgentClient.send(command);

    // Leer respuesta (stream)
    let completion = "";
    for await (const chunkEvent of response.completion) {
      const chunk = new TextDecoder().decode(chunkEvent.chunk.bytes);
      completion += chunk;
    }


    res.json({ reply: completion });

  } catch (error) {
    console.error("Este es el error",error);
    res.status(500).json({ error: "Error al invocar el agente" });
  }
});



// en un archivo aparte "server.js"
// Esto es un servidor local , dice chat que es recomendable ponerlo 
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
