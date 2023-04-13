import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient } from 'mongodb';

dotenv.config();

async function main() {
  const client = new MongoClient(process.env.MONGO_URL!);
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
  });

  app.get('/articles', async (req, res) => {
    const collection = db.collection('articles');
    const result = await collection.find().toArray();
    res.json(result);
  });
}

main();
