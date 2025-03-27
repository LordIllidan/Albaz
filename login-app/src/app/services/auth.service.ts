import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    // Check if user was previously logged in
    const savedState = localStorage.getItem('isLoggedIn');
    if (savedState === 'true') {
      this.isLoggedInSubject.next(true);
    }
  }

  login(email: string, password: string): boolean {
    // Here you would typically validate credentials against an API
    // For demo purposes, we'll just accept any non-empty credentials
    if (email && password) {
      this.isLoggedInSubject.next(true);
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedInSubject.next(false);
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }
} 