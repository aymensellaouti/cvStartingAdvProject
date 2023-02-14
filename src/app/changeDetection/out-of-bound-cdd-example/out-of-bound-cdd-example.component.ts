import { OnInit } from '@angular/core';
import {
  Component,
  NgZone,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-out-of-bound-cdd-example',
  templateUrl: './out-of-bound-cdd-example.component.html',
  styleUrls: ['./out-of-bound-cdd-example.component.css'],
})
export class OutOfBoundCDdExampleComponent implements OnInit {
  message = '';
  x: number = 0;
  y: number = 0;
  @ViewChild('theDiv', { static: true }) theDiv!: ElementRef<HTMLDivElement>;
  /* luckNumber = 0; */
  age = 20;
  constructor(private zone: NgZone, private renderer: Renderer2) {
    /*     this.luckNumber = Math.ceil(Math.random() * 20); */
  }
  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.renderer.listen(this.theDiv.nativeElement, 'mousemove', (event) =>
        this.getInfos(event)
      );
      /*       this.zone.run(() => {
        this.renderer.listen(this.theDiv, 'mousemove', this.getInfos);
      }); */
    });
  }
  get juniorOrSenior() {
    console.log('in junior or senior');
    return this.age >= 40 ? 'senior' : 'junior';
  }
  getInfos(event: MouseEvent) {
    this.x = event.offsetX;
    this.y = event.offsetY;
  }
}
