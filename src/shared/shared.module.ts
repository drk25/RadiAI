import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatGridListModule,
  MatListModule,
  MatPaginatorModule,
  MatCardModule,
  MatSelectModule, MatCheckboxModule


} from '@angular/material';


@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule
  ]

})

export class SharedModule { }
