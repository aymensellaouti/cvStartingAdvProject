import { NgModule } from '@angular/core';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { FrontComponent } from './templates/front/front.component';
import { AdminComponent } from './templates/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { NF404Component } from './components/nf404/nf404.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { FirstComponent } from './components/first/first.component';
import { MasterDetailCvComponent } from './cv/master-detail-cv/master-detail-cv.component';
import { ListResolver } from './cv/resolvers/list.resolver';
import { DetailsResolver } from './cv/resolvers/details.resolver';
import { NavigationExtrasExampleComponent } from './navigation-extras-example/navigation-extras-example.component';
import { CanLeaveTodoGuard } from './auth/can-leave-todo.guard';

const routes: Route[] = [
  /* cv */
  /*   { path: '', redirectTo: 'cv', pathMatch: 'full' }, */
  { path: 'first/:id', component: FirstComponent },
  { path: 'login', component: LoginComponent },
  { path: 'extra', component: NavigationExtrasExampleComponent },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: 'cv/list',
    component: MasterDetailCvComponent,
    resolve: {
      cvs: ListResolver,
    },
    children: [
      {
        path: ':id',
        component: DetailsCvComponent,
        resolve: { cv: DetailsResolver },
        data: {
          someData: { name: 'aymen' },
        },
      },
    ],
  },
  { path: 'cv/add', component: AddCvComponent, canActivate: [AuthGuard] },
  {
    path: 'cv/:id',
    component: DetailsCvComponent,
    resolve: { cv: DetailsResolver },
  },
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: 'todo',
        component: TodoComponent,
        canDeactivate: [CanLeaveTodoGuard],
      },
      { path: 'word', component: MiniWordComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'color/:defaultColor/:color', component: ColorComponent },
    ],
  },
  /*   { path: ':quelqueChose', component: SecondComponent }, */
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /* , {enableTracing: true} */)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
