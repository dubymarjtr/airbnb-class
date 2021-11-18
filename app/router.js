import Router from "express";
import client from "./client.js";
import config from "./config.js";

const collection = client
  .db(config.db.name)
  .collection(config.db.collectionName);

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello API");
});

router.get("/current-listings", async (req, res) => {
  const currentListings = await collection.find({}).limit(10).toArray();
  res.json(currentListings);
});

export default router;
