import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SessionsService } from 'src/app/services/sessions.service';
import { ClientServiceService } from '../../services/client-service.service';

import {Router} from "@angular/router";

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
    form: any = FormGroup;
    loading = false;
    submitted = false;

    constructor(
      private formBuilder: FormBuilder,
      private sessionService:SessionsService,
      private router: Router,
      private clientService:ClientServiceService
    ) {}

  ngOnInit(){
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit(form:any) {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    let response:any ={};


   
    // Login user
    this.clientService.login({email:form.value.email,password:form.value.password})
      .subscribe(
        (res) => {
          response = res;
          if(response.code != 404){
            this.router.navigate(['/dashboard']);
          // Set session for user
          this.sessionService.set("userEmail","form.value.email");
          }
          else{
          alert(response.status);
          this.loading=false;
          form.resetForm();
          }
          
        },
        (err) => {
          alert(err.error.message);
          this.loading=false;
          form.resetForm();
        },
        () => console.log('HTTP request completed.')
        )
  }
}
