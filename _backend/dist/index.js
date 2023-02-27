"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const addElement_1 = __importDefault(require("./src/addElement"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 5000; // process.env.PORT |
/*
let db: mongoDB.Db;
(async function () {
  db = await connectToDatabase();
})();
*/
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server created for Budget Planner");
});
app.post("/api/transactions/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, addElement_1.default)(req, res /*db*/);
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
