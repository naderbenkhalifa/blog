import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AddPostComponent } from './add-post.component';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
       
      ],
      imports: [ HttpClientTestingModule ,ReactiveFormsModule, FormsModule,EditorModule,],
    })
   
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call addPost method', () => {
    spyOn(component, 'addPost');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.addPost).toHaveBeenCalledTimes(1);
  });
});
