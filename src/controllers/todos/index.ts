import ITodo  from "./../../types/todo.js"
import Todo from "../../models/todo.js"

//fetching the Todos from the Database
const getTodos = async (req: any, res:any ): Promise<void> => {
    try{
        const todos: ITodo[] = await Todo.find();
        res.status(200).json({ todos });

    }
    catch(error){
        throw error;
    }
}

//Creating new todo and saving it into the database
const addTodo= async (req: any, res:any): Promise<void> =>{
    try{
        //extracting the data from payload
        const body = req.body as Pick<ITodo, "name" | "description" | "status">

        //creating new todo using the schema we have created
        const todo: ITodo = new Todo({
            name: body.name,
            description: body.description,
            status: body.status,
        })

        //saving new todo created
        const newTodo: ITodo = await todo.save();
        const allTodos: ITodo[] = await Todo.find();

        res
        .status(201)
        .json({
            message: "Todo added",
            todo: newTodo,
            todos: allTodos,
        })

    }catch(error){
        throw error;
    }
}

//Updating the todo
const updateTodo = async (req:any, res:any): Promise<void>=>{
    try{
        const{ params: {id}, body } = req;
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
            {_id:id},
            body,
        )

        const allTodos: ITodo[]= await Todo.find();
        res.status(200).json({
            message: "Todo updated",
            todo:updateTodo,
            todos: allTodos,
        })

    }
    catch(error){
        throw error;
    }
}

// deleting already existing Todo
const deleteTodo = async (req:any, res:any): Promise<void> =>{
    try{
        const deleteOne: ITodo | null= await Todo.findByIdAndDelete(req.params.id);

        const allTodos: ITodo[] = await Todo.find();

        res.status(200).json({
            message:"Succesfully Deleted",
            deletedTodo:deleteOne,
            todos: allTodos,
        })

    }
    catch(error){
        throw error;
    }
}

export { deleteTodo, getTodos, addTodo, updateTodo } ;

