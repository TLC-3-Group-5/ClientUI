import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientServiceService } from '../../services/client-service.service';
import {Router} from "@angular/router";
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private clientService:ClientServiceService,
    private router: Router,
    private sessionService:SessionsService,
  ){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)],
      confirm_password: ['', [Validators.required]],
      check: ['', Validators.required]
    });
  }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit(form:any) {
      this.submitted = true;

      let registerResponse:any={};

    
      if (this.form.invalid) {
        return;
      }

      this.loading = true;

      // Register new user
      this.clientService.signup({name:form.value.name,email:form.value.email,password:form.value.password})
      .subscribe(
        (res) => {
          this.router.navigate(['/dashboard']);
          // Set session for user
          this.sessionService.set("userEmail","form.value.email");
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
