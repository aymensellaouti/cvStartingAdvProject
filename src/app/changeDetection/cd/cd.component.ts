import { Component } from '@angular/core';
import { Todo } from '../../todo/model/todo';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.css'],
})
export class CdComponent {
  message = 'La racine CD Component';
  todo = new Todo('2', 'cd Todo', 'changer mon état dans 2 secondes');
  name = 'cd';
  get messageCd() {
    console.log('CD in CD');
    return this.message;
  }
  constructor() {
    setTimeout(() => {
      /*  this.todo = { ...this.todo, content: 'le nouveau contenu' }; */
      this.todo.content = 'new content';
      this.name = 'new cd';
    }, 3000);
  }
}
