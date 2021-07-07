export class TodoItem {
  // id: number;
  // task : String;
  // complete: Boolean;
  // constructor(id:number, task:String, complete:Boolean){
  //     this.id = id;
  //     this.task = task;
  //     this.complete = complete;
  // }
  constructor(
    public id: number,
    public task: String,
    public complete: Boolean
  ) {}
  /**
   * printDetails
   */
  public printDetails(): void {
    console.log(`${this.id} \t ${this.task} \t ${this.complete}`);
  }
}