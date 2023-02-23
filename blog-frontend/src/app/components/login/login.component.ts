import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/blog-api/src/models';
import { UsersService } from 'src/blog-api/src/services';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
 user: User;
 message:string="";

  constructor(private formBuilder: FormBuilder ,private userService: UsersService, private router: Router) { 

   
    this.loginForm=this.formBuilder.group({
      email: new FormControl("", [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
     password: new FormControl('', [Validators.required, Validators.minLength(8)])
    }),
    this.user = {
      email:'',
      password:''
    }
   
 

 }

  ngOnInit(): void {
     
  }
  login(){
    this.user.email = this.loginForm.get('email').value;
    this.user.password = this.loginForm.get('password').value;
    if (this.loginForm.valid) {
     
    {
    this.userService.addUserLogin(this.user).subscribe(res=>{
      this.router.navigate(['/'])
    
    },
     
      error => {
        console.log("failure");
      
      this.message=" email or password is incorrect. "
      });
    }
  }
    

  }
  get password() { return this.loginForm.get('password'); }
  get email() { return this.loginForm.get('email'); }

   
  
   

  }


 


 