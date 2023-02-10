import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-master-detail-cv',
  templateUrl: './master-detail-cv.component.html',
  styleUrls: ['./master-detail-cv.component.css'],
})
export class MasterDetailCvComponent {
  cvs: Cv[];
  constructor(
    private CvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cvs = this.activatedRoute.snapshot.data['cvs'];
    this.CvService.selectCv$.subscribe((cv) =>
      this.router.navigate([cv.id], { relativeTo: this.activatedRoute })
    );
  }
}
