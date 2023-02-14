import { Component } from '@angular/core';

@Component({
  selector: 'app-color2',
  templateUrl: './color2.component.html',
  styleUrls: ['./color2.component.css']
})
export class Color2Component {
  color = "red";

  changeColor() {
    this.color = "yellow";
  }
}
