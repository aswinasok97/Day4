import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Pages/contact/contact.component';
import { DistrictsComponent } from './Pages/districts/districts.component';
import { HomeComponent } from './Pages/homePage/home.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { SignUpComponent } from './Pages/signUp/sign-up.component';
import { SingleComponent } from './pages/single/single.component';

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
  {
    path:'single',component: SingleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
