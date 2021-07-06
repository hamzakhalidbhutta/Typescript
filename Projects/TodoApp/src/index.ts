// import { TodoItem } from "./todoItem";

// console.clear();

// let item1: TodoItem = new TodoItem(1, "Electricity Bill", false);
// let item2: TodoItem = new TodoItem(2,"Purchase Mangoes",true);

// item1.printDetails();
// item2.printDetails();


import { ItemCollection } from "./itemCollection";

console.clear();

let itemCol: ItemCollection = new ItemCollection();

itemCol.addTodo("Eat Biryani");

itemCol.printDetails();

itemCol.taskDone(1);
itemCol.printDetails();