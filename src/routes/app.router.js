import { Router } from "express";
import user_controller from "../controllers/users/user.controller.js";
import course_controller from "../controllers/courses/course.controller.js";
import enrollment_controller from "../controllers/entrollments/enrollment.controller.js";
import app_controller from "../controllers/app.controller.js";

const router = Router();

const base_url = "/";
const api_user_url = "/user";
const api_course_url = "/course";
const api_enrollment_url = "/enrollment";

router.get(base_url, app_controller.init);

// USERS
router.get(`${api_user_url}`, user_controller.getUserList);
router.get(`${api_user_url}/create`, user_controller.createUser);

// COURSES
router.get(`${api_course_url}`, course_controller.getCourseList);
router.get(`${api_course_url}/create`, course_controller.createCourse);

// ENROLLMENTS
router.get(`${api_enrollment_url}`, enrollment_controller.getEnrollmentList);
router.get(`${api_enrollment_url}/create`, enrollment_controller.createEnrollment);

export default router;
