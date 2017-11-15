import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import { ApiService } from './services/api.service';
import 'rxjs/add/operator/map';
import {User} from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  protected user: User;

  constructor(public apiService: ApiService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {

  }

  onLogoutClick() {
    this.apiService.logout();
    this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }

}
