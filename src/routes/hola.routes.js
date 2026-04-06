import { Router } from "express";
import { holaHandler } from "../controllers/hola.controller.js";

const router = Router();

//router.get("/hola", holaHandler);

//Si voy a recibir info en el body usar post
router.post("/hola", holaHandler);


export default router;