import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardProfilComponent } from './components/card-profil/card-profil.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { TodoComponent } from './todo/todo/todo.component';

import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';

import { Btc2usdPipe } from './pipes/btc2usd.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontComponent } from './templates/front/front.component';
import { AdminComponent } from './templates/admin/admin.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './auth/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { TestHttpComponent } from './components/test-http/test-http.component';
import { AuthInterceptorProvider } from './auth/interceptors/auth.interceptor';
import { RepeatDirective } from './directives/repeat.directive';
import { TestStructurelDirectiveComponent } from './directives/test-structurel-directive/test-structurel-directive.component';
import { ProductsComponent } from './products/products.component';
import { TestPipeImpureComponent } from './test-pipe-impure/test-pipe-impure.component';
import { CalculFuPipe } from './pipes/calcul-fu.pipe';
import { PremierServiceService } from './services/premier-service.service';
import { GLOBAL_CONFIG } from './config/global.config';
import { CvService } from './cv/services/cv.service';
import { FakeCvService } from './cv/services/fake-cv.service';
import { UUID_TOKEN } from './injectionTokens/uuid.token';

import { v4 as uuidv4 } from 'uuid';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';
import { ContainerComponent } from './container/container.component';
import { TestHostDirective } from './directives/test-host.directive';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NavigationExtrasExampleComponent } from './navigation-extras-example/navigation-extras-example.component';
import { FromComponent } from './RxJsExemples/from/from.component';
import { OfComponent } from './RxJsExemples/of/of.component';
import { SliderComponent } from './RxJsExemples/slider/slider.component';
import { CdComponent } from './changeDetection/cd/cd.component';
import { OutOfBoundCDdExampleComponent } from './changeDetection/out-of-bound-cdd-example/out-of-bound-cdd-example.component';
import { CounterComponent } from './testComponent/counter/counter.component';
import { Color2Component } from './testComponent/color2/color2.component';
import { Auth2Component } from './testComponent/auth2/auth2.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardProfilComponent,
    PereComponent,
    FilsComponent,
    CardProfilComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2usdPipe,
    TodoComponent,
    NavbarComponent,
    FrontComponent,
    AdminComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    TestHttpComponent,
    RepeatDirective,
    TestStructurelDirectiveComponent,
    ProductsComponent,
    TestPipeImpureComponent,
    CalculFuPipe,
    ResolutionModifiersComponent,
    ContainerComponent,
    TestHostDirective,
    NavigationExtrasExampleComponent,
    FromComponent,
    OfComponent,
    SliderComponent,
    CdComponent,
    OutOfBoundCDdExampleComponent,
    CounterComponent,
    Color2Component,
    Auth2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [
    AuthInterceptorProvider,
    PremierServiceService,
    {
      provide: CvService,
      useClass: GLOBAL_CONFIG.env == 'dev' ? FakeCvService : CvService,
    },
    {
      provide: UUID_TOKEN,
      useValue: uuidv4,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
