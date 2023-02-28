import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as mongoDB from "mongodb";

import { connectToDatabase } from "./src/mongoClient";
import addElement from "./src/addElement";
dotenv.config();
const app: Express = express();
const port = process.env.PORT as string | 5000;
/*
let db: mongoDB.Db;
(async function () {
  db = await connectToDatabase();
})();
*/

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server created for Budget Planner");
});

app.post("/api/transactions/add", async (req: Request, res: Response) => {
  await addElement(req, res /*db*/);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
