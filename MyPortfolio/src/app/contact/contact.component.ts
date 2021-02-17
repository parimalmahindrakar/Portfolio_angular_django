import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  errMsg:string

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }
  onFormSubmit(form: NgForm) {

    if (form.valid) {
      if (this.isFormValid(form)) {
        this.errMsg = "Loading..."
        this.sharedService.addReview(form.value).subscribe((resData) => {
          alert(resData['msg'])
          this.errMsg=""
          form.reset()
        })
      } 
    } else {
      this.errMsg = "Please fill the form correctly."
    }

    
    
  }
  isFormValid(form: NgForm) {
    var isEmailValid = form['controls']['email']['valid']
    if (!isEmailValid) {
      this.errMsg = "Please enter the valid email address."
      return false
    }
    var reviewLength = form['value']['review']
    if (reviewLength.length < 10) {
      this.errMsg = "Please enter some big review."
      return false
    }
    return true
  }
}
