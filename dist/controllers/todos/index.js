import Todo from "../../models/todo.js";
//fetching the Todos from the Database
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
};
//Creating new todo and saving it into the database
const addTodo = async (req, res) => {
    try {
        //extracting the data from payload
        const body = req.body;
        //creating new todo using the schema we have created
        const todo = new Todo({
            name: body.name,
            description: body.description,
            status: body.status,
        });
        //saving new todo created
        const newTodo = await todo.save();
        const allTodos = await Todo.find();
        res
            .status(201)
            .json({
            message: "Todo added",
            todo: newTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
};
//Updating the todo
const updateTodo = async (req, res) => {
    try {
        const { params: { id }, body } = req;
        const updateTodo = await Todo.findByIdAndUpdate({ _id: id }, body);
        const allTodos = await Todo.find();
        res.status(200).json({
            message: "Todo updated",
            todo: updateTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
};
// deleting already existing Todo
const deleteTodo = async (req, res) => {
    try {
        const deleteOne = await Todo.findByIdAndDelete(req.params.id);
        const allTodos = await Todo.find();
        res.status(200).json({
            message: "Succesfully Deleted",
            deletedTodo: deleteOne,
            todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
};
export { deleteTodo, getTodos, addTodo, updateTodo };
//# sourceMappingURL=index.js.map