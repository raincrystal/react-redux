import express from "express"
import {  addTodoList,  getTodoList, updateTodoRec, updateTodoRecStatus, deleteTodoRec } from "../controllers/todo.controller";

const todoRoutes = express.Router();

todoRoutes.post('/add-task', addTodoList)
todoRoutes.get('/get-task', getTodoList)
todoRoutes.put('/update-task', updateTodoRec)
todoRoutes.put('/update-task-status', updateTodoRecStatus)
todoRoutes.delete('/delete-task', deleteTodoRec)


export default todoRoutes;
