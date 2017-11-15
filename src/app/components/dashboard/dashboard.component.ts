import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // declare a property called fileuploader and assign it to an instance of a new fileUploader.
  // pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public response: any;

  constructor(private apiService: ApiService,
              private el: ElementRef,
              private flashMessage: FlashMessagesService,
              private fb: FormBuilder,
              private fg: FormGroup,
              private validator: Validators,
              private router: Router) {
  }

  ngOnInit() {
    if (this.apiService.loggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  upload() {
    // locate the file element meant for the file upload.
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#image');
    // get the total amount of files attached to the file input.
    const fileCount: number = inputEl.files.length;
    // check if the filecount is greater than zero, to be sure a file was selected.
    if (fileCount > 0) {
      this.apiService.classifyImage(inputEl.files.item(0)).subscribe((success) => {
        console.log(success);
        this.response = JSON.stringify(success, undefined, 2);
      }, (error) => {
        console.log(error);
        this.response = error;
      });
    } else {
      this.flashMessage.show('Please select an image', {
        cssClass: 'alert-danger .alert-dismissible',
        timeout: 5000,
        grayOut: true
      });
    }
  }

}
