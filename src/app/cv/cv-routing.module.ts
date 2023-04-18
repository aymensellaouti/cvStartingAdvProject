import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { AuthGuard } from "../auth/guards/auth.guard";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
import { MasterDetailCvComponent } from "./master-detail-cv/master-detail-cv.component";
import { DetailsResolver } from "./resolvers/details.resolver";
import { ListResolver } from "./resolvers/list.resolver";

const routes: Route[] = [
  {
    path: "",
    component: CvComponent,
  },
  {
    path: "list",
    component: MasterDetailCvComponent,
    resolve: {
      cvs: ListResolver,
    },
    children: [
      {
        path: ":id",
        component: DetailsCvComponent,
        /*  resolve: { cv: DetailsResolver }, */
        data: {
          someData: { name: "aymen" },
        },
      },
    ],
  },
  { path: "add", component: AddCvComponent, canActivate: [AuthGuard] },
  {
    path: ":id",
    component: DetailsCvComponent,
    resolve: { cv: DetailsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
