import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as http from "http";
import {KeycloakSecurityService} from "./keycloak-security.service";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http:HttpClient,private key:KeycloakSecurityService) { }

  public getAbsence(){

    console.log(this.key.kc.token)
    return this.http.get("http://localhost:8083/AllAbsence",
      {headers:new HttpHeaders({
        Authorization:'Bearer '+this.key.kc.token,
      })});


  }
}
