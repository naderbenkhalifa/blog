import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy },
       
      ]
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be valid', () => {
    component.loginForm.controls.email.setValue('lotfi@gmail.com');
    component.loginForm.controls.password.setValue('12345678');
    
    expect(component.loginForm.valid).toBeTruthy();
  });
  it('form  invalid', () => {
    component.loginForm.controls.email.setValue('lotfi');
    component.loginForm.controls.password.setValue('12345678');
    
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('should call login method', () => {
    spyOn(component, 'login');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.login).toHaveBeenCalledTimes(1);
  });
});
