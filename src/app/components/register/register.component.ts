import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {ValidateService} from '../../services/validate.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: String;
  lastName: String;
  email: String;
  username: String;
  password: String;

  constructor(private validateService: ValidateService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private apiService: ApiService) {
  }

  ngOnInit() {
    if (this.apiService.loggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password
    };

    // check required fields
    if (!this.validateService.validateSignup(user)) {
      this.flashMessages.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // check email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessages.show('Please enter a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // register user
    this.apiService.registerUser(user).subscribe(data => {
      console.log(data);
      if (data.success) {
        this.apiService.storeUserData(data.token, data.user);
        this.flashMessages.show('Success!', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessages.show(data.message, {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }


}
