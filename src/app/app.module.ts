import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second.component";
import { ColorComponent } from "./components/color/color.component";
import { TwoComponent } from "./components/two/two.component";
import { CardProfilComponent } from "./components/card-profil/card-profil.component";
import { PereComponent } from "./components/pere/pere.component";
import { FilsComponent } from "./components/fils/fils.component";

import { NgstyleComponent } from "./directives/ngstyle/ngstyle.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { NgclassComponent } from "./directives/ngclass/ngclass.component";

import { HighlightDirective } from "./directives/highlight.directive";
import { RainbowDirective } from "./directives/rainbow.directive";

import { Btc2usdPipe } from "./pipes/btc2usd.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { TestFormComponent } from "./components/test-form/test-form.component";
import { LoginComponent } from "./auth/login/login.component";
import { TestObservableComponent } from "./components/test-observable/test-observable.component";
import { TestHttpComponent } from "./components/test-http/test-http.component";
import { AuthInterceptorProvider } from "./auth/interceptors/auth.interceptor";
import { UnlessDirective } from "./directives/unless.directive";
import { RepeatDirective } from "./directives/repeat.directive";
import { TestPipeComponent } from "./components/test-pipe/test-pipe.component";
import { CalculFPipe } from "./pipes/calcul-f.pipe";
import { MathService } from "./services/math.service";
import { UtilsService } from "./services/utils.service";
import { LOGGER_INJECTION_TOKEN } from "./tokens/logger.token";
import { LoggerService } from "./services/logger.service";
import { Logger2Service } from "./services/logger2.service";

import { v4 as uuidv4 } from "uuid";
import { UUIDToken } from "./tokens/uuid.token";
import { ContainerComponent } from "./components/container/container.component";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { SliderComponent } from "./components/slider/slider.component";
import { TodoModule } from "./todo/todo.module";
import { CvModule } from "./cv/cv.module";
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
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2usdPipe,
    NavbarComponent,
    FrontComponent,
    AdminComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    TestHttpComponent,
    UnlessDirective,
    RepeatDirective,
    TestPipeComponent,
    CalculFPipe,
    ContainerComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
  ],
  providers: [
    AuthInterceptorProvider,
    MathService,
    UtilsService,
    {
      provide: LOGGER_INJECTION_TOKEN,
      useClass: LoggerService,
      multi: true,
    },
    {
      provide: LOGGER_INJECTION_TOKEN,
      useClass: Logger2Service,
      multi: true,
    },
    {
      provide: UUIDToken,
      useValue: uuidv4,
    },
    /*     {
      provide: UtilsService,
      useClass: UtilsService,
      deps: [mathServiceToken],
    },

 */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
