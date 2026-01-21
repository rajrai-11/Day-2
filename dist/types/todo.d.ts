import { Document } from "mongoose";
interface ITodo extends Document {
    name: string;
    description: string;
    status: boolean;
}
export default ITodo;
//# sourceMappingURL=todo.d.ts.map