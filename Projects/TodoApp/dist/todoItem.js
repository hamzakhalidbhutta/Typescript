"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    // id: number;
    // task : String;
    // complete: Boolean;
    // constructor(id:number, task:String, complete:Boolean){
    //     this.id = id;
    //     this.task = task;
    //     this.complete = complete;
    // }
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    /**
     * printDetails
     */
    printDetails() {
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`);
    }
}
exports.TodoItem = TodoItem;
