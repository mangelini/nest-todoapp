export interface TodoModelData {
  id: number;
  title: string;
  author_id: number;
}

class TodoModel {
  id: number;
  title: string;
  author_id: number;

  constructor(todoData: TodoModelData) {
    this.id = todoData.id;
    this.title = todoData.title;
    this.author_id = todoData.author_id;
  }
}
export default TodoModel;
