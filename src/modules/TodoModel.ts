export default class TodoModel {
  id?: string;
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean = false, id?: string) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}