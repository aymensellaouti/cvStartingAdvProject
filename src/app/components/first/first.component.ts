import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name = 'aymen';
  message = '';
  isHidden = false;
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
  showHide() {
    this.isHidden = !this.isHidden;
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
