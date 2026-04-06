import { Router } from "express";

import {
  getPosts,
  getPostsByUser,
  createPost
} from "../controllers/postController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";


/**
 * En este archivo definimos las rutas relacionadas con los verbos
 *  y llamamos a los controladores (que se encargan de construir la respuesta)
 */

const router = Router();

//Si la ruta tiene authMiddleware, el cliente debe enviar un token válido 
//en el header Authorization para acceder a esta ruta
// (se lo podemos quitar)



/**
 * @openapi
 * /posts:
 *   get:
 *     summary: Obtener todos los posts
 *     description: Devuelve una lista de todos los posts (requiere autenticación)
 *     tags:
 *       - Posts
 *     responses:
 *       200:
 *         description: Lista de posts obtenida correctamente
 *       401:
 *         description: No autorizado
 * 
 */
//router.get("/posts", authMiddleware, getPosts);
router.get("/posts", getPosts);

/**
 * @openapi
 * /posts/user/{userId}:
 *   get:
 *     summary: Obtener posts por usuario
 *     description: Devuelve los posts de un usuario específico
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Lista de posts del usuario
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Usuario no encontrado
 */
//router.get("/posts/user/:userId", authMiddleware, getPostsByUser);
router.get("/posts/user/:userId", getPostsByUser);

/**
 * @openapi
 * /posts:
 *   post:
 *     summary: Crear un post
 *     description: Crea un nuevo post (requiere autenticación)
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Mi primer post
 *               content:
 *                 type: string
 *                 example: Este es el contenido del post
 *     responses:
 *       201:
 *         description: Post creado correctamente
 *       400:
 *         description: Error en los datos enviados
 *       401:
 *         description: No autorizado
 */
// router.post("/posts", authMiddleware, createPost);
router.post("/posts", createPost);


export default router;
