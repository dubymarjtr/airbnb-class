import Router from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello API");
});

export default router;
