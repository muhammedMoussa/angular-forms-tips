import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {IUser, User} from './models';
@Injectable({
  providedIn: 'root'
})

export class StateService {
  private userData$ = new BehaviorSubject<IUser>(new User());
  
  public setUserData = (userData: IUser) => this.userData$.next(userData);
  public getUserData = (): Observable<IUser> => this.userData$.asObservable();
  public resetUserData = () => this.userData$.next(new User());
}
