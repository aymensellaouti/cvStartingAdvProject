import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { RouterModule } from "@angular/router";
import { CanLeaveTodoGuard } from "./guards/can-leave-todo.guard";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "todo",
        component: TodoComponent,
        canDeactivate: [CanLeaveTodoGuard],
      },
    ]),
    CommonModule,
    FormsModule,
  ],
  declarations: [TodoComponent],
  providers: [],
})
export class TodoModule {}
