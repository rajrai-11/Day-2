import { Router } from "express";
import { getTodos, addTodo, deleteTodo, updateTodo } from "../controllers/todos/index.js";

const router: Router= Router();

router.get("/todos",getTodos);

router.post("/add-todo",addTodo);

router.put("/edit-todo/:id", updateTodo);

router.delete("/delete-todo/:id", deleteTodo)

export default router;