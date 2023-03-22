import { Component, Inject, OnInit, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  private todoService: TodoService = inject(TodoService);
  todo!: Todo;
  constructor(private title: Title) {}
  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.todo = this.todoService.createTodo();
    this.title.setTitle("todo");
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = this.todoService.createTodo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
