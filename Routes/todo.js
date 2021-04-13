import express from "express";
import {
    addTodoList,deleteList,updateList,updateCards,deleteCards,addTodoCards,allListInTrello,sortCards
 } from "../controllers/trello.js";

const router = express.Router();

router.post("/addTodoList", addTodoList);
router.get('/todolist',allListInTrello)
router.delete("/removeList/:id", deleteList);
router.patch("/removeCard/:id", deleteCards);
router.patch("/updateList", updateList);
router.patch("/updateCard", updateCards);
router.patch("/addTodoCard/:id", addTodoCards);
router.post("/sortTodoCard", sortCards);

export default router;
