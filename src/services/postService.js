import * as postRepository from "../repositories/postRepository.js";


//============= llamando a consulta =====================

export const listPosts = async () => {

  return await postRepository.getAllPosts();

};

//============= llamando a consulta =====================

export const listPostsByUser = async (userId) => {

  return await postRepository.getPostsByUser(userId);

};

//============= llamando a consulta =====================

export const createPost = async (title, content, userId) => {

  if (!title || !content) {
    throw new Error("Datos incompletos");
  }

  return await postRepository.createPost(title, content, userId);
};

