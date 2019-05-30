import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}
  
  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAQ1xx6C0cKoObKe_YM1PBg8Qo03PIb2qo',
    {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}