import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const EMAILNAME_KEY = 'AuthEmailName';
const AUTHORITIES_KEY = 'AuthAuthorities';
@Injectable({
  providedIn: 'root'
})

export class TokenService {

  roles: Array<string> = [] ;

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(EMAILNAME_KEY);
    window.sessionStorage.setItem(EMAILNAME_KEY, userName);
  }

  public getUserName(): string | null {
    return  window.sessionStorage.getItem(EMAILNAME_KEY);
  }

  public setAuthorities(authorities: string[] ): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[]
 {
    this.roles = [];
  if (sessionStorage.getItem(AUTHORITIES_KEY)) {
   JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority: { authority: string; }) => {
        this.roles.push(authority.authority);
      });
    }
    console.log(this.roles);
    return this.roles;

  }


  public logOut(): void {
    window.sessionStorage.clear();
  }

}
