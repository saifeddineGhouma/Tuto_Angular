import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  login(user , password)
  {

      if (user=="admin" && password =="123456")
      {
        return true;
      }
      else
      {
        return false;
      }
   }
}
