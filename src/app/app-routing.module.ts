import { NgModule } from "@angular/core";
import { RouterModule, Route, PreloadAllModules } from "@angular/router";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { CanLoadCvGuard } from "./cv/guards/can-load-cv.guard";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { CanMatchAuthenticatedGuard } from "./guards/can-match-authenticated.guard";
import { CustomPreloadingStrategy } from "./preloading strategies/cutomPreloadingStrategy";

const routes: Route[] = [
  /* cv */
  /*   { path: '', redirectTo: 'cv', pathMatch: 'full' }, */
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: FirstComponent,
    canMatch: [CanMatchAuthenticatedGuard],
  },
  { path: "dashboard", component: SecondComponent },
  {
    path: "todo",
    loadChildren: () => import("./todo/todo.module").then((m) => m.TodoModule),
  },
  {
    path: "cv",
    data: { preload: true },
    /*     canLoad: [CanLoadCvGuard], */
    loadChildren: () => import("./cv/cv.module").then((m) => m.CvModule),
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
  { path: "**", component: NF404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
      /*       preloadingStrategy: PreloadAllModules, */
      /* enableTracing: true, */
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
