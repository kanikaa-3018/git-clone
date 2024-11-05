import express from "express";
import { getLikes, getUserProfileAndRepos, likeProfile } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const router= express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
router.get("/likes", isAuthenticated, getLikes);
router.get("/like/:username", isAuthenticated, likeProfile);

export default router;