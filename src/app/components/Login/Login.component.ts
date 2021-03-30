import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SessionsService } from 'src/app/services/sessions.service';
import { ClientServiceService } from '../../services/client-service.service';

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

  onSubmit(data:any) {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
   
    // Login user
    this.clientService.login({email:data.email,password:data.password})
    .subscribe((data: {})=>{
      
      // if successful redirect user to dashboard
      // set session id and email for user
      console.log(typeof data);
    })
  }
}
