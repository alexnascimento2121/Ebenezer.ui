import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/components/shared/shared.service';
import { Login } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  login: Login ={        
    cpf:"",
    senha:""    
    };
    constructor(private router : Router, 
      
       private sharedPrivace: SharedService,
       private fb:FormBuilder,
       private loginService: LoginService) { }
  
    createForm!: FormGroup
    
    ngOnInit(): void {
      this.createForm = this.fb.group({
        cpf:["",[Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
        senha:["",[Validators.required] ]  
      });
    }
  
    loginUsuario(){   
      if(this.createForm.valid){
       this.loginService.login(this.login);
      }   
    }
  
    cancel(){
      this.router.navigate(["/person"]);
    }

}
