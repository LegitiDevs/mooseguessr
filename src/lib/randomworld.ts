import { MongoClient } from "mongodb";

export default async function randomWorld() {
  const client = new MongoClient(process.env.DB_URL);
  await client.connect();

  const db = client.db("mooseguessr");
  const collection = db.collection("worlds");

  const data = await collection.aggregate([{ $sample: { size: 1 } }]).toArray();
  return data[0];
}
