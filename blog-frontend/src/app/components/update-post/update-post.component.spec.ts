import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatePostComponent } from './update-post.component';

describe('UpdatePostComponent', () => {
  let component: UpdatePostComponent;
  let fixture: ComponentFixture<UpdatePostComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
 
  
 


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePostComponent ],
      imports: [ HttpClientTestingModule,ReactiveFormsModule, FormsModule ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: {snapshot: {params: {'i': ''} }}}
       
      ]
    })
    
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call delete method', () => {
    spyOn(component, 'update');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.update).toHaveBeenCalledTimes(1);
  });
});
