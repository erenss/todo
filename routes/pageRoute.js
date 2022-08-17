import express from "express";
//import * as pageController from "../controllers/pageController.js";
import { getTodoPage, getCategoryPage } from "../controllers/pageController.js";

const router = express.Router();


/* router.route("/").get(pageController.getTodoPage);
rout er.route("/category").get(pageController.getCategoryPage);*/

router.route("/").get(getTodoPage);
router.route("/category").get(getCategoryPage);

export default router;