import { client } from "../index.js";

export async function updateContentbyId(id, data) {
  return await client
    .db("cmsbe")
    .collection("cms")
    .updateOne({ id: id }, { $set: data });
}
export async function deleteContentbyId(id) {
  return await client.db("cmsbe").collection("cms").deleteOne({ id: id });
}
export async function createContent(data) {
  return await client.db("cmsbe").collection("cms").insertMany(data);
}
export async function getContentbyId(id) {
  return await client.db("cmsbe").collection("cms").findOne({ id: id });
}
export async function getContent() {
  return await client.db("cmsbe").collection("cms").find({}).toArray();
}
