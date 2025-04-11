import user_service from "../../services/users/user.service.js";

export default {
  getUsers: async (req, res) => {
    try {
      let userList = await user_service.getList();
      res.status(200).json(userList);
    } catch (e) {
      res.status(500).json({
        status: "error",
        message: e,
      });
    }
  },
};
