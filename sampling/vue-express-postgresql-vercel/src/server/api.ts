import express from "express";
import type { Request, Response } from "express";
import { Task as RequestTask } from "@/shared/request/task";
import { Task as ResponseTask } from "@/shared/response/task";
const api = express.Router();

api.get("/", (_req, res) => res.send("api root route"));

const tasks: ResponseTask[] = [];

api.get("/tasks", (_req: Request, res: Response) => {
    res.status(200).json(JSON.stringify(tasks));
});

api.post("/tasks", (req: Request<{}, {}, RequestTask>, res: Response) => {
    const data = req.body;
    const newId = `${tasks.length}`;
    tasks.push({
        id: newId,
        title: data.title,
        complete: data.complete,
    });
    res.status(200).json(JSON.stringify(tasks));
});

export default api;