import express from "express";
import { getResult } from "../controllers/eat.controller.js";

export const eatRouter = express.Router();

eatRouter.post("/", (req, res) => getResult(req, res));