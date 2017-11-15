import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private apiService: ApiService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    if (this.apiService.loggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.apiService.loginUser(user).subscribe(data => {
      if (data.success) {
        this.apiService.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show(data.message, {
          cssClass: 'alert-danger .alert-dismissible',
          timeout: 5000,
          grayOut: true
        });
        this.flashMessage.grayOut(true);
        this.router.navigate(['/login']);
      }
    });
  }

}
