import * as userService from "../services/userService.js";

export const getUsers = async (req, res) => {

  const users = await userService.listUsers();

  res.json(users);
};

export const getUser = async (req, res) => {

  try {

    const user = await userService.findUser(req.params.id);

    res.json(user);

  } catch (error) {

    res.status(404).json({
      message: error.message
    });

  }

};
