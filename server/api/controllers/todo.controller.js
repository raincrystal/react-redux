import { todoTask } from "../../models/Todo.schema"

export const getTodoList = async (req, res) =>{
    const {limit, page} = req.query;

    try {
        const allTodoList = await todoTask.paginate({}, {limit: limit, page: page});
        res.json(allTodoList);
    } catch (e) {
        throw new Error(e)
    }
}

export const addTodoList = async (req, res) =>{
    const {task, taskExpDate} = req.body;
    try {
        const rec =  await todoTask.create({task: task, taskExpDate: taskExpDate});
        res.json(rec);

    } catch (e) {
        throw new Error(e)
    }
}

export const updateTodoRec = async (req, res) =>{
    const {id, task, taskExpDate} = req.body;
    try {
        const rec = await todoTask.findByIdAndUpdate(id, {task: task, taskExpDate: taskExpDate}, {new: true});
        res.json(rec);
    } catch (e) {
        throw new Error(e)
    }
}

export const updateTodoRecStatus = async (req, res) =>{
    const {id ,status} = req.body;
    try {
        const rec = await todoTask.findByIdAndUpdate(id, {status: status});
        res.json(rec);
    } catch (e) {
        throw new Error(e)
    }
}

export const deleteTodoRec = async (req, res) =>{
    const { id } = req.query;
    try {
        const rec = await todoTask.findByIdAndDelete(id);
        res.json(rec);
    } catch (e) {
        throw new Error(e)
    }
}
