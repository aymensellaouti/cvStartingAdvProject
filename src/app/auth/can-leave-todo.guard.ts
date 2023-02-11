import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TodoComponent } from '../todo/todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class CanLeaveTodoGuard implements CanDeactivate<TodoComponent> {
  canDeactivate(
    todoComponent: TodoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (todoComponent.todo.content.trim() || todoComponent.todo.name.trim())
        return of(confirm('Etes vous sur de vouloir qui'));
      return of(true);
  }

}
