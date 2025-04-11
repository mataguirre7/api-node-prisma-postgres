import { Router } from "express";
import user_controller from "../controllers/users/user.controller.js";
import course_controller from "../controllers/courses/course.controller.js";
import app_controller from "../controllers/app.controller.js";

const router = Router();

const base_url = '/';
const api_user_url = '/user';
const api_course_url = '/course';

router.get(base_url, app_controller.init);
router.get(`${api_user_url}`, user_controller.getUserList);
router.get(`${api_course_url}`, course_controller.getCourseList);


export default router;