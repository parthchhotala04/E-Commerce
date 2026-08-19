import e from "express"
import * as authController from "../controller/authController.js"

const router = e.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;