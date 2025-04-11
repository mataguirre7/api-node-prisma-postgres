import { Role } from "@prisma/client";
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
  createCourse: async (req, res) => {
    try {
      let courseCreated = await course_service.create(req.body);

      res.status(200).json({
        status: "success",
        message: `data successfully created: ${JSON.stringify(courseCreated)}`,
      });
    } catch (e) {
      res.status(500).json({
        status: "error",
        message: e,
      });
    }
  }
};
