import { Login } from './login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  http:HttpClient) { }

  login(login: Login){
    return this.http.post(AppConstants.baseLogin,JSON.stringify(login)).subscribe(data =>{
      /*retorno hhtp da api*/ 
        console.info(JSON.parse(JSON.stringify(data)))
    })
  }
}
