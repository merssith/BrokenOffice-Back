const { User } = require("../models");

exports.getAllUsers = async () => {
  const users = await User.findAll({
    include: [
      {
        association: User.UserRole,
      },
      {
        association: User.Office,
      },
      {
        association: User.Item,
      },
      {
        association: User.Incident,
      },
    ],
  });
  return users;
};

exports.createUser = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw Error("USER NOT FOUND");
  const validate = await user.validatePassword(password);
  if (!validate) throw Error("INCORRECT PASSWORD");
  return {
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    telephone: user.telephone,
    geoCords: user.geoCords,
    avatar: user.avatar,
  };
};

exports.editUser = (id, body) => {
  return User.findByPk(id).then((user) => user.update(body));
};

exports.deleteUser = (id) => {
  return User.destroy({ where: { id } });
};