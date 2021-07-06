import { TodoItem } from "./todoItem";

export class ItemCollection {
  private nextId: number = 1;

  constructor(public items: TodoItem[] = []) {}

    /**
     * addTodo
     */
    public addTodo(task:String) {
        let item :TodoItem = new TodoItem(this.nextId,task,false);
        this.nextId++;
        this.items.push(item);
    }

    public printDetails(): void{
        this.items.forEach((item:TodoItem) => {
            item.printDetails();
        });
    }
}
