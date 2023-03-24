import { NgModule } from "@angular/core";
import { RouterModule, Route, PreloadAllModules } from "@angular/router";
import { TodoComponent } from "./todo/todo/todo.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";
import { MasterDetailsComponent } from "./cv/master-details/master-details.component";
import { CvListResolver } from "./cv/resolvers/cv-list.resolver";
import { MessageResolver } from "./cv/resolvers/message.resolver";
import { CvDetailResolver } from "./cv/resolvers/cv-detail.resolver";

const routes: Route[] = [
  /* cv */
  /*   { path: '', redirectTo: 'cv', pathMatch: 'full' }, */
  { path: "login", component: LoginComponent },
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
  {
    path: "",
    component: FrontComponent,
    children: [{ path: "word", component: MiniWordComponent }],
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "color/:defaultColor/:color", component: ColorComponent },
    ],
  },
  /*   { path: ':quelqueChose', component: SecondComponent }, */
  /*   { path: "**", component: NF404Component }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes /* , {
      enableTracing: true,
    } */
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
