import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PostComponent } from './components/post/post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { NavComponent } from './components/nav/nav.component';
import { Ng2Webstorage } from 'ngx-webstorage';
import { ContactComponent } from './components/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    LoginComponent,
    HomeComponent,
    AddPostComponent,
    PostComponent,
    UpdatePostComponent,
    NavComponent,
    ContactComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    Ng2Webstorage.forRoot(),
   
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
