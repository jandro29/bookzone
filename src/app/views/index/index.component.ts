import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {  FormGroupDirective,  NgForm,} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';
import { LoginuserService } from 'src/app/loginuser.service';
import { User } from '../../user'



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
user:User=new User();


  hide = true;




  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.email]);

  loginForm!: FormGroup;
  User: any;



  constructor(private loginuserservice: LoginuserService) { }

  ngOnInit(): void {}

  userLogin(){
    console.log(this.user)
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("Login Succesfully")
    },error=>alert("sorry"));
  }

  matcher = new MyErrorStateMatcher();
}
