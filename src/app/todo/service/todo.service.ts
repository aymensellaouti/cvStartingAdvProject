import { Injectable, Inject } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.service";
import { UUIDToken } from "../../tokens/uuid.token";

let n = 1;

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService,
    @Inject(UUIDToken) private uuid: () => string
  ) {}

  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(): Todo {
    return new Todo(this.uuid());
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    console.log(this.todos);

    this.todos.push(todo);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   */
  logTodos() {
    this.loggerService.logger(this.todos);
  }
}
