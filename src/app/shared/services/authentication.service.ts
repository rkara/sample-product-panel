import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface AppUser {
  name: string;
  email: string;
  photoUri: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppAuthenticationService {
  /**
   * True if the user is authenticated
   */
  get authenticated$(): Observable<boolean> {
    return this.authenticatedSubject.asObservable();
  }

  get user$(): Observable<AppUser | undefined> {
    return this.authenticated$.pipe(
      switchMap((auth) => {
        if (auth) {
          return of({
            name: 'Bill Murray',
            photoUri: 'http://www.fillmurray.com/200/200',
            email: 'bill.murray@example.com',
          });
        }

        return of(undefined);
      })
    );
  }

  private authenticatedSubject = new BehaviorSubject<boolean>(true);

  constructor() {}

  login$(emailAddress: string, password: string) {
    if (password.length > 3) {
      return of(true);
    }
    return of(false);
  }
}
