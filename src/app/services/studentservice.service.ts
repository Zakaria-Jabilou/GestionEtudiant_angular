import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) {}
  public getStudent():Observable<any>{
    return this.http.get("http://localhost:8000/STUDENT-SERVICE/students");
    //return this.http.get<Array<Client>>("http://localhost:8080/CLIENT-SERVICE/clients");
  }
}
