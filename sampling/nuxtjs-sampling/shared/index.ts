export type ResponseTodo = {
    id: string;
    title: string;
    complete: boolean;
};

export type RequestTodo = {
    title: string;
    complete?: boolean;
};