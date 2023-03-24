import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { TodoComponent } from "../todo/todo.component";

@Injectable({
  providedIn: "root",
})
export class CanLeaveTodoGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: TodoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.todo.name.trim() || component.todo.content.trim()) {
      return confirm(
        "Etes vous sur de vouloir quitter la page sans terminer la gestion du todo"
      );
    }
    return true;
  }
}
