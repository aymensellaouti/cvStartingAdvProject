import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, tap, debounceTime, switchMap, Observable } from 'rxjs';
import { CvService } from '../../cv/services/cv.service';
import { Cv } from '../../cv/model/cv';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements AfterViewInit {
  constructor(private cvService: CvService) {}
  search = '';
  cvs$!: Observable<Cv[]>;
  @ViewChild('searchInpu') searchInput!: ElementRef;
  ngAfterViewInit(): void {
    /* console.log('searchInput',this.searchInput); */
    this.cvs$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(500),
      switchMap(() => this.cvService.selectByName(this.search)),
      tap((data) => console.log(data))
    );
  }
}
