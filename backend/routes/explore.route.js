import express from "express";
import { explorePopularRepos } from "../controllers/explore.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.get("/repos/:language" ,isAuthenticated, explorePopularRepos);

export default router;

