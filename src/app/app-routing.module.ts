import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { Routes, RouterModule } from '@angular/router';
import { ServicesprestataireComponent } from './servicesprestataire/servicesprestataire.component';
import { AddserviceComponent } from './addservice/addservice.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'offres', component: ServicesprestataireComponent},
  {path: 'addoffre', component: AddserviceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
