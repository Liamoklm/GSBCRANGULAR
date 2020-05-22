import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MonMedecinComponent } from './mon-medecin/mon-medecin.component';
import { MonAccueilComponent } from './mon-accueil/mon-accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MajMedecinComponent } from './maj-medecin/maj-medecin.component';


import { MainService } from './services/main.service';
import { testService } from './services/testService';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard';
import { TestComponent } from './test/test.component';
import { DetailsMedicamentComponent } from './details-medicament/details-medicament.component';


const appRoutes : Routes = [
  { path: 'accueil', canActivate: [AuthGuard],component: MonAccueilComponent },
  { path: 'auth', component: AuthentificationComponent },
 /* { path: 'medicament', component: MonMedicamentComponent },*/
  { path: 'medecin',canActivate: [AuthGuard], component: MonMedecinComponent },
  {path: '', component: MonAccueilComponent},
  { path: 'medicament',canActivate: [AuthGuard], component: TestComponent },
  { path: 'medicament/details-medoc/:id',canActivate: [AuthGuard], component: DetailsMedicamentComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MonMedecinComponent,
    MonAccueilComponent,
    AuthentificationComponent,
    MajMedecinComponent,
    TestComponent,
    DetailsMedicamentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    MainService,
    AuthService,
    AuthGuard,
    testService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
