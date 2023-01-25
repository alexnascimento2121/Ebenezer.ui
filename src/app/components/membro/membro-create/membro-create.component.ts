import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Membro } from '../membro.model';
import { MembroService } from '../membro.service';
import { SharedService } from '../../shared/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-membro-create',
  templateUrl: './membro-create.component.html',
  styleUrls: ['./membro-create.component.css']
})
export class MembroCreateComponent implements OnInit {

 
  membro: Membro ={        
    nome:"",
    email:""    
    };
    constructor(private router : Router, 
      private membroService: MembroService,
       private sharedPrivace: SharedService,
       private fb:FormBuilder) { }
  
    createForm!: FormGroup
    
    ngOnInit(): void {
      this.createForm = this.fb.group({
        nome:["",[Validators.required,Validators.minLength(5)]],
        email:["",[Validators.required] ]  
      });
    }
  
    createMembro():void{   
      if(this.createForm.valid){
        this.membroService.create(this.createForm.value).subscribe(() => { 
          this.sharedPrivace.showMessage('Mmebro adicionado com Sucesso!');
            this.router.navigate(["/membro"]);
          });
      }   
    }
  
    cancel(){
      this.router.navigate(["/membro"]);
    }

}
