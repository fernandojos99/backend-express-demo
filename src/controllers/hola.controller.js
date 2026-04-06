import { obtenerRespuesta } from "../services/hola.service.js";

export const holaHandler = async (req, res) => {
  try {
    //const respuesta = await obtenerHolaGracioso();
    console.log("req.body:", req.body); //  AQUÍ se imprime el body recibido
    const { prompt } = req.body; //  AQUÍ se recibe

    if (!prompt) {
      return res.status(400).json({ error: "prompt es requerido" });
    }

    const respuesta = await obtenerRespuesta(prompt);
    res.json({
      respuesta,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error llamando a Bedrock" });
  }
};