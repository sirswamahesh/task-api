import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Get all tasks",
  });
});

export default router;
