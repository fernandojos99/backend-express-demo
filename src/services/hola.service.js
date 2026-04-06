import { invokeClaude } from "../repositories/bedrock.repository.js";

export const obtenerRespuesta = async (prompt) => {
  const respuesta = await invokeClaude(prompt);
  return respuesta;
};