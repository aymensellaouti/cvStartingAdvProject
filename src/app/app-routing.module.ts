import { NgModule } from "@angular/core";
import { RouterModule, Route, PreloadAllModules } from "@angular/router";
import { TodoComponent } from "./todo/todo/todo.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { FirstComponent } from "./components/first/first.component";
import { NavigationExtrasExampleComponent } from "./navigation-extras-example/navigation-extras-example.component";
import { CanLeaveTodoGuard } from "./auth/can-leave-todo.guard";
import { CanLoadCvGuard } from "./auth/guard/can-load-cv.guard";
import { CustomPreloadingStrategy } from "./moduleLoader/custom-preloading-loader.strategy";

const routes: Route[] = [
  /* cv */
  /*   { path: '', redirectTo: 'cv', pathMatch: 'full' }, */
  { path: "first/:id", component: FirstComponent },
  {
    path: "cv",
    /*     canLoad: [CanLoadCvGuard],
     */ loadChildren: () => import("./cv/cv.module").then((m) => m.CvModule),
    data: { preload: false },
  },
  { path: "login", component: LoginComponent },
  { path: "extra", component: NavigationExtrasExampleComponent },
  {
    path: "",
    component: FrontComponent,
    children: [
      {
        path: "todo",
        component: TodoComponent,
        canDeactivate: [CanLeaveTodoGuard],
      },
      { path: "word", component: MiniWordComponent },
    ],
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
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: CustomPreloadingStrategy,
      } /* , {enableTracing: true} */
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
