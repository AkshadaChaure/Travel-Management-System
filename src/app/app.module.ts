import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router'; 

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewComponent } from './registration/view.component';
import { HomeComponent } from './home/home.component';
import {EditComponent} from './registration/edit.component';


const appRoutes: Routes = [
{ path: 'home', component: HomeComponent },

{ path: 'add', component: RegistrationComponent },

{ path: 'view/:name', component: ViewComponent },
{ path: 'edit/:name', component: EditComponent },

// { path: 'view/:vn', component: ViewComponent },

{
path: '',
redirectTo: '/home',
pathMatch: 'full'
},
{
path: '**',
redirectTo: '/home',
pathMatch: 'full'
},

]; 


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,  ViewComponent, EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
     RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
