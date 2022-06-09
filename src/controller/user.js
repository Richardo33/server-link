const { user } = require("../../models");

exports.getUser = async (req, res) => {
  try {
    const findUser = await user.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });
    // console.log(id);

    res.send({
      status: "success",
      findUser,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.editUser = async (req, res) => {
  try {
    const data = req.body;

    const edit = await user.update(data, {
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    res.send({
      status: "success",
      edit,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: " failed",
      message: "cannot edit user",
    });
  }
};
// exports.deleteUser = async (req, res) => {
//   try {
//     const data = req.body;

//     const edit = await user.destroy(data, {
//       where: {
//         id: req.user.id,
//       },
//       attributes: {
//         exclude: ["createdAt", "updatedAt", "password"],
//       },
//     });

//     res.send({
//       status: "success",
//       edit,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: " failed",
//       message: "cannot edit user",
//     });
//   }
// };
