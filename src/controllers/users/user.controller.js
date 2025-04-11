import user_service from "../../services/users/user.service.js";

export default {
  getUserList: async (req, res) => {
    try {
      let userList = await user_service.getList();
      res.status(200).json({
        status: "success",
        data: {
          items: userList,
          totalCount: userList.length,
        },
      });
    } catch (e) {
      res.status(500).json({
        status: "error",
        message: e,
      });
    }
  },
  createUser: async (req, res) => {
    try {
      let userCreated = await user_service.create(req.body);

      res.status(200).json({
        status: "success",
        message: `data successfully created: ${JSON.stringify(userCreated)}`,
      });
    } catch (e) {
      res.status(500).json({
        status: "error",
        message: e,
      });
    }
  }
};
