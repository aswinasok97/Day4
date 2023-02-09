import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { HomeComponent } from './Pages/homePage/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignUpComponent } from './Pages/signUp/sign-up.component';

const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'contact',component: ContactComponent
  },
  {
    path:'districts',component: DistrictsComponent
  },
  {
    path:'signUp',component: SignUpComponent
  },
  {
    path:'signin',component: SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
