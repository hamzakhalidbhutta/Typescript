"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const todoItem_1 = require("./todoItem");
class ItemCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
    }
    /**
     * addTodo
     */
    addTodo(task) {
        let item = new todoItem_1.TodoItem(this.nextId, task, false);
        this.nextId++;
        this.items.push(item);
    }
    printDetails() {
        this.items.forEach((item) => {
            item.printDetails();
        });
    }
    taskDone(taskDone) {
        let task = this.items.find((item) => { (item.id === taskDone) ? item.complete = true : null; });
    }
}
exports.ItemCollection = ItemCollection;
