import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';


const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path: 'register-success', component: RegisterSuccessComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'add-post', component: AddPostComponent},
  {path: 'add-post/:id', component: AddPostComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'update', component: UpdatePostComponent},
  {path: 'update/:i', component: UpdatePostComponent},
  {path: 'contact', component: ContactComponent},
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
