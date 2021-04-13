import express from "express";
import {
  register,users,login,userinfo,profileedit,uploadprofileimg
 } from "../controllers/user.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/userinfo", userinfo );
router.patch("/profileedit", profileedit );
router.patch("/imgedit", uploadprofileimg );
router.get("/userdata", users);

export default router;
