import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { Membro } from '../membro.model';
import { MembroService } from '../membro.service';

@Component({
  selector: 'app-membro-delete',
  templateUrl: './membro-delete.component.html',
  styleUrls: ['./membro-delete.component.css']
})
export class MembroDeleteComponent implements OnInit {

  membro: Membro ={  
    nome:"",
    email:""    
  };

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private membroService: MembroService, 
    private sharedPrivace: SharedService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

      this.membroService.getById(id !== null ? JSON.parse(id): String).subscribe(membro => {
        this.membro = membro
      })
  }

  deleteMembro():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.membroService.delete(id !== null ? JSON.parse(id): String).subscribe(() => { 
      this.sharedPrivace.showMessage('Membro Removido com Suscesso!');
        this.router.navigate(["/membro"]);
      });
  }

  cancel():void{
    this.router.navigate(["/membro"]);
  }

}
