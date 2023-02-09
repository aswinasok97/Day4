import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/homePage/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { SignUpComponent } from './Pages/signUp/sign-up.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    DistrictsComponent,
    SignUpComponent,
    SigninComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
