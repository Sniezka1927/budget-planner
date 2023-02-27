import * as mongoDB from "mongodb";
import { Request, Response } from "express";

/*
interface parameters {
  req: Request;
  res: Response;
  db: mongoDB.Db;
}
*/

const addElement = (req: Request, res: Response, db: mongoDB.Db) => {
  res.send("");
};

export default addElement;
