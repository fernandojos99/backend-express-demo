import * as userRepository from "../repositories/userRepository.js";

export const listUsers = async () => {
  return await userRepository.getAllUsers();
};

export const findUser = async (id) => {

  const user = await userRepository.getUserById(id);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  return user;
};
