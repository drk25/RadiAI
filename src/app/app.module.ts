import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from '../app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedModule } from '../shared/shared.module'
import { CoreModule } from '../core/core.module';
import { ChartsModule } from 'ng2-charts';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FlashMessagesModule} from 'angular2-flash-messages';

import {HttpClientModule} from '@angular/common/http';

import {ApiService} from './services/api.service';
import {ValidateService} from './services/validate.service';
import {AuthGuard} from './guards/auth.guard';


import 'hammerjs';
import { AppComponent } from './app.component';
import { ChartsComponent } from './components/charts/charts.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    FeedbackComponent,
    AboutComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    ChartsModule,
    AngularFontAwesomeModule,
    FlashMessagesModule,
  ],
  providers: [
    ApiService,
    ValidateService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
