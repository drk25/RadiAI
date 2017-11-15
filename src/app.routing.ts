import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './app/components/dashboard/dashboard.component';
import {ChartsComponent} from './app/components/charts/charts.component';
import {FeedbackComponent} from './app/components/feedback/feedback.component';
import {AboutComponent} from './app/components/about/about.component';
import {LoginComponent} from './app/components/login/login.component';
import {RegisterComponent} from './app/components/register/register.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'charts', component: ChartsComponent},
    {path: 'feedback', component: FeedbackComponent},
    {path: 'about', component: AboutComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
