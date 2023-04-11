import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient } from 'mongodb';

dotenv.config();

async function main() {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}.iuwtymy.mongodb.net/?retryWrites=true&w=majority`,
  );
  await client.connect();
  const db = client.db('newsStandDB');

  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.listen(process.env.PORT, () => {
    console.log('listening on 1116');
  });

  app.get('/issues', async (req, res) => {
    const collection = db.collection('issues');
    const result = await collection.find().toArray();
    res.json(result);
    console.log(result);
  });

  app.get('/articles', async (req, res) => {
    const collection = db.collection('articles');
    const result = await collection.find().toArray();
    res.json(result);
  });
}

main();
