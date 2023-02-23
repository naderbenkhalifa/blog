import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/blog-api/src/models';
import { UsersService } from 'src/blog-api/src/services';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  user:User={};
  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router:Router) {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl("", [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword:new FormControl('', [Validators.required, Validators.minLength(8)]) 
    });
    this.user = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };




   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.userName = this.registerForm.get('username').value;
    this.user.email = this.registerForm.get('email').value;
    this.user.password = this.registerForm.get('password').value;
    this.user.confirmPassword = this.registerForm.get('confirmPassword').value;
    if (this.registerForm.valid) {
    
   

    this.userService.save(this.user).subscribe(data => {
      console.log('register succes');
    // this.router.navigate(['/register-success']);
     this.router.navigate(['/login']);
    }, error => {
      console.log('register failed');
    });
  }
    
  }

  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword () { return this.registerForm.get('confirmPassword'); }

}
