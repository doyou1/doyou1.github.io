import { ResponseTodo } from "@/shared";


const db = (() => {
    const todos: ResponseTodo[] = [];
    const push = (id: string, title: string, complete: boolean) => {
        todos.push({
            id,
            title,
            complete,
        });      
    }

    return {
        todos,
        push,
    };
})();


export default db;