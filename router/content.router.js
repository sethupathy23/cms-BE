import express from "express";
import {
  getContent,
  getContentbyId,
  createContent,
  deleteContentbyId,
  updateContentbyId,
} from "../service/Content.service.js";

const router = express.Router();

router.get("/", async function (request, response) {
  //db.movies.find({})
  const content = await getContent();
  console.log(content);
  response.send(content);
});

router.get("/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  //db.cms.findOne({id: "100"})
  const cm = await getContentbyId(id);
  console.log(cm);
  cm
    ? response.send(cm)
    : response.status(404).send({ message: "Content cannot found" });
});

//express.json() - middleware
router.post("/", async function (request, response) {
  const data = request.body;
  //db.movies.insertMany(data)
  console.log(data);
  const result = await createContent(data);
  response.send(result);
});

router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  //db.cms.deleteOne({id: "100"})
  const result = await deleteContentbyId(id);
  console.log(result);
  result.deletedCount >= 1
    ? response.send({ message: "Content deleted successfully" })
    : response.status(404).send({ message: "Content cannot found" });
});

//update
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  console.log(data);
  console.log(id);
  //db.cms.updateOne({id: id}, {$set: data})
  const result = await updateContentbyId(id, data);
  console.log(result);
  response.send(result);
});

export default router;
