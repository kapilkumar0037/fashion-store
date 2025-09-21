import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IUser } from '@shared/models/general.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiService = inject(ApiService);
  userDetails!: IUser;

  setUserDetails(user: IUser) {
    this.userDetails = user;
  }
  getUserDetails(): IUser {
    return this.userDetails;
  }

  login(username: string, password: string): Observable<any> {
    return this.apiService.login().create({ username, password });
  }


}
