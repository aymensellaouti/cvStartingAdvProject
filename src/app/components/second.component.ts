import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../auth/model/user.model";

@Component({
  selector: "app-second",
  template: `
    <p>second works! {{ i }}</p>
    <div class="alert alert-danger">{{ user | json }}</div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondComponent {
  @Input() user: User;
  i = 0;
  constructor() {
    setInterval(() => this.i++, 1000);
    this.user = new User(2, "fake@gmail.com");
  }
}
