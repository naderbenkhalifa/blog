import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [ RegisterComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
       
      ]
    })
    .compileComponents()
  });
 

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be valid', () => {
    component.registerForm.controls.username.setValue('lotfi');
    component.registerForm.controls.email.setValue('lotfi@gmail.com');
     component.registerForm.controls.password.setValue('12345678');
    component.registerForm.controls.confirmPassword.setValue('12345678');
    expect(component.registerForm.valid).toBeTruthy();
  });
  it('form should be invalid', () => {
    component.registerForm.controls.username.setValue('lotf');
    component.registerForm.controls.email.setValue('lotfi');
     component.registerForm.controls.password.setValue('1234567');
    component.registerForm.controls.confirmPassword.setValue('1234567');
    expect(component.registerForm.valid).toBeFalsy();
  });
  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

});
