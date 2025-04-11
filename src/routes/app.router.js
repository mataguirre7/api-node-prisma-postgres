import user_controller from "../controllers/users/user.controller.js";
import { Router } from "express";

const router = Router();

const base_url = '/';
const api_users_url = 'users';

router.get(base_url, (req, res) => {
    res.send('api is working successfully!');
});
router.get(`${api_url}/${api_users_url}`, user_controller.getUsers);

export default router;