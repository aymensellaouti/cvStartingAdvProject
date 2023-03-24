import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/guards/auth.guard";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
import { MasterDetailsComponent } from "./master-details/master-details.component";
import { CvDetailResolver } from "./resolvers/cv-detail.resolver";
import { CvListResolver } from "./resolvers/cv-list.resolver";
import { MessageResolver } from "./resolvers/message.resolver";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "cv",
        children: [
          {
            path: "",
            component: CvComponent,
            resolve: {
              cvs: CvListResolver,
              message: MessageResolver,
            },
          },
          { path: "add", component: AddCvComponent, canActivate: [AuthGuard] },
          {
            path: "list",
            component: MasterDetailsComponent,
            children: [
              {
                path: ":id",
                component: DetailsCvComponent,
                resolve: {
                  cv: CvDetailResolver,
                },
                data: {
                  withDivInTitle: true,
                },
              },
            ],
          },
          {
            path: ":id",
            component: DetailsCvComponent,
            resolve: {
              cv: CvDetailResolver,
            },
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CvRoutingModule {}
