import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/homePage/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { DistrictsComponent } from './Pages/districts/districts.component';
import { SignUpComponent } from './Pages/signUp/sign-up.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SingleComponent } from './pages/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    DistrictsComponent,
    SignUpComponent,
    SigninComponent,
    NavbarComponent,
    FooterComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
