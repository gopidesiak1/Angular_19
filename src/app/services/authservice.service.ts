import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  private isLoggedInStatus=false;

  constructor() { }

  login(username:string,password:string){

    if(username==='admin' && password==='password'){
    
      this.isLoggedInStatus=true;
      localStorage.setItem('token','sample');

      return true;
    }
    return false;
  }

  logout(){
    this.isLoggedInStatus=false;
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    return this.isLoggedInStatus || !!localStorage.getItem('token')
  }

  // can activate child
  
  private userRole: 'admin' | 'user' | null = null;
  login1(role: 'admin' | 'user') {
    this.userRole = role;
    localStorage.setItem('role', role);
  }
  logout1() {
    this.userRole = null;
    localStorage.removeItem('role');
  }

  getRole(): 'admin' | 'user' | null {
    return (
      this.userRole || (localStorage.getItem('role') as 'admin' | 'user' | null)
    );
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }
}
