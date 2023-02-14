import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../../todo/model/todo';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent {
  @Input() name = 'aymen';
  message = '';
  isHidden = false;
  @Input() todo: Todo = new Todo('1', 'default Todo', 'default content');
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }
  get messageCd() {
    console.log('CD in First');
    return this.message;
  }
  constructor(private router: Router, private ActivatedRoute: ActivatedRoute) {
    console.log(ActivatedRoute.snapshot);
    console.log(ActivatedRoute.snapshot.paramMap.getAll('id'));
    console.log(ActivatedRoute.snapshot.queryParams['test']);
    console.log(ActivatedRoute.snapshot.params['id']);
    ActivatedRoute.paramMap.subscribe((d) => console.log(d));

    /*     console.log(this.router.routerState); */
  }
}
