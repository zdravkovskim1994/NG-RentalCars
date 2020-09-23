import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/home-slider.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarsComponent } from './cars/cars.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { CarDetailsComponent } from './car-details/car-details.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    NavigationComponent,
    CarsComponent,
    AboutUsComponent,
    ContactComponent,
    PageNotFoundComponent,
    FormRegisterComponent,
    CarDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
