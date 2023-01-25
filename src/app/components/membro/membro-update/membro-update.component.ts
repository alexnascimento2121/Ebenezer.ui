import { Membro } from './../membro.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembroService } from '../membro.service';
import { SharedService } from '../../shared/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-membro-update',
  templateUrl: './membro-update.component.html',
  styleUrls: ['./membro-update.component.css']
})
export class MembroUpdateComponent implements OnInit {

  membro: Membro ={    
    nome:"",
    email:""   
  };

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private membroService: MembroService, 
    private sharedPrivace: SharedService,
    private fb:FormBuilder) { }

    updateForm!: FormGroup

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

      

      this.updateForm = this.fb.group({
        nome:['',[Validators.required,Validators.minLength(5)]],
        email:['',[Validators.required] ]
       
      });

      this.membroService.getById(id !== null ? JSON.parse(id): String).subscribe((membro) => {
        this.membro = membro
        this.updateForm.setValue({
          nome:membro.nome,
          email:membro.email
        });
    });
  }

  updateMembro(){
    this.membroService.update(this.membro).subscribe(() => { 
      this.sharedPrivace.showMessage('Membro Editado com Sucesso!');
        this.router.navigate(["/membro"]);
      });
  }

  cancel(){
    this.router.navigate(["/membro"]);
  }

}
