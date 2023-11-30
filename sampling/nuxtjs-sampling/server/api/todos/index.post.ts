import { RequestTodo } from "@/shared";
import db from "@/server/db";

export default eventHandler(async (event) => {
    const { title } = await readBody<RequestTodo>(event);
    db.push(`${db.todos.length}`, title, false);
    return db.todos;
});