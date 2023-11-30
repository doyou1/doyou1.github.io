import db from "@/server/db";

export default eventHandler(async (event) => {
    return db.todos;
});