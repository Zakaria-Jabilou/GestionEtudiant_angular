import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from "../services/keycloak-security.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  name:any;
  constructor(public key:KeycloakSecurityService) {
  }

  ngOnInit(): void {
    this.name=this.key.kc.tokenParsed;
    console.log(this.name);

  }

  onLogout() {
    this.key.kc.logout();
  }

  onLogin() {
    this.key.kc.login();
  }

  onChangePassword() {
    this.key.kc.accountManagement();
  }

  isAppManager() {

    return this.key.kc.hasRealmRole("Admin");
  }
}
