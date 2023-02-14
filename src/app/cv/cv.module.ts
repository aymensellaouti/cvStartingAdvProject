import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import { MasterDetailCvComponent } from './master-detail-cv/master-detail-cv.component';
import { RouterModule } from '@angular/router';
import { AutocompleteComponent } from '../RxJsExemples/autocomplete/autocomplete.component';
import { FormsModule } from '@angular/forms';
import { CvRoutingModule } from './cv-routing.module';

@NgModule({
  declarations: [
    AddCvComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailsCvComponent,
    CvCardComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    MasterDetailCvComponent,
    AutocompleteComponent,
  ],
  imports: [CommonModule, CvRoutingModule, FormsModule],
  exports: [],
})
export class CvModule {}
