import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { CarDetailsGuard } from './guards/car-details.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'cars/:id', component: CarDetailsComponent, canActivate:[CarDetailsGuard]},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'register', component: FormRegisterComponent},
  {path: 'login', component: FormLoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
