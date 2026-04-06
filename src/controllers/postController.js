import * as postService from "../services/postService.js";

/** Aqui manejamos todas las funciones 
 *  no nos preocupamos por los verbos ,el nombre de la ruta . Solo construimos 
 * la RESPUESTA.
 * 
 * @param {
 * } req 
 * @param {*} res 
 */



export const getPosts = async (req, res) => {

  const posts = await postService.listPosts();

  res.json(posts);

};

export const getPostsByUser = async (req, res) => {

  const posts = await postService.listPostsByUser(req.params.userId);

  //Convierte a Json y lo envia al cliente con el header Content-Type: application/json
  res.json(posts);

};



export const createPost = async (req, res) => {

  try {

    // El body requiere title, content y userId, si falta 
    //alguno de estos campos se lanzará un error
    const { title, content, userId } = req.body;

    const post = await postService.createPost(title, content, userId);

    res.status(201).json(post);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }

};
