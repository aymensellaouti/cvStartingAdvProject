import { Component } from '@angular/core';
import { TestModifiers1Service } from '../services/test-modifiers1.service';
import { TestModifiersService } from '../services/test-modifiers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [
    {
      provide: TestModifiersService,
      useClass: TestModifiers1Service,
    },
  ],
})
export class ContainerComponent {
  constructor(private router: Router, private ActivatedRoute: ActivatedRoute) {
    console.log(ActivatedRoute.snapshot);
    ActivatedRoute.paramMap.subscribe((d) => console.log(d));

    /*     console.log(this.router.routerState); */
  }
}
