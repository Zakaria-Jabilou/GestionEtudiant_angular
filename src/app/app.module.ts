import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AbsenceComponent } from './absence/absence.component';
import {KeycloakSecurityService} from "./services/keycloak-security.service";


export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return ()=>kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavbarComponent,
    AbsenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactory,multi:true},
    // {provide:HTTP_INTERCEPTORS,useClass:RequestIntercepteurService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
