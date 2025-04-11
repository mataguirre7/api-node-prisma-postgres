import course_service from "../../services/courses/course.service.js";

export default {
  getCourseList: async (req, res) => {
    try {
      let courseList = await course_service.getList();
      res.status(200).json({
        status: "success",
        data: {
          items: courseList,
          totalCount: courseList.length,
        },
      });
    } catch (e) {
      res.status(500).json({
        status: "error",
        message: e,
      });
    }
  },
};
