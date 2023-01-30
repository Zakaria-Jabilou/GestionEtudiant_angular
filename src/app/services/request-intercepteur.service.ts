// import { Injectable } from '@angular/core';
// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
// import {Observable} from "rxjs";
// import {KeycloakSecurityService} from "./keycloak-security.service";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class RequestIntercepteurService implements HttpInterceptor{
//
//   constructor(private sec:KeycloakSecurityService) { }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log("requesthttp interceptor.....")
//     if (!this.sec.kc.authenticated) return next.handle(req);
//     let request=req.clone({
//       setHeaders:{
//         Authorization:'Bearer '+this.sec.kc.token,
//       }
//
//     });
//     return next.handle(request);
//
//   }
// }
