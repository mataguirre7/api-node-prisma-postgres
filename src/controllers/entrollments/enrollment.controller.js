import enrollment_service from "../../services/enrollments/enrollment.service.js";

export default {
  getEnrollmentList: async (req, res) => {
    try {
      let enrollmentList = await enrollment_service.getList();
      res.status(200).json({
        status: "success",
        data: {
          items: enrollmentList,
          totalCount: enrollmentList.length,
        },
      });
    } catch (e) {
      res.status(500).json({
        status: "error",
        message: e,
      });
    }
  },
  createEnrollment: async (req, res) => {
    try {
      let enrollmentCreated = await enrollment_service.create(req.body);

      res.status(200).json({
        status: "success",
        message: `data successfully created: ${JSON.stringify(
          enrollmentCreated
        )}`,
      });
    } catch (e) {
      res.status(500).json({
        status: "error",
        message: e,
      });
    }
  }
};
