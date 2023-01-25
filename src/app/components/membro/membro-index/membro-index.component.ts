import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../shared/dialog.service';
import { SharedService } from '../../shared/shared.service';
import { Membro } from '../membro.model';
import { MembroService } from '../membro.service';

@Component({
  selector: 'app-membro-index',
  templateUrl: './membro-index.component.html',
  styleUrls: ['./membro-index.component.css']
})
export class MembroIndexComponent implements OnInit {

  membros: Membro[] = [];
  displayedColumns: string[] = ['id','nome', 'email','opcoes'];

  constructor(
    private membroService: MembroService,
    private dialogService:DialogService,
    private sharedPrivace: SharedService,
   
    ) { }

  ngOnInit(): void {
   this.updateMembros();
  }

  updateMembros(){
    this.membroService.index().subscribe(membros => {
      this.membros = membros
    });
  }

  onDelete(id: any){
    this.dialogService.openConfirmDialog('Voce deseja remover esse Membro ?')
    .afterClosed().subscribe((res) => {
        if(res){
          
          this.membroService.delete(id !== null ? JSON.parse(id): String).subscribe(() => { 
            this.sharedPrivace.showMessage('Membro  Removido com sucesso!');
           this.updateMembros();
            });
        }
      
    });
    }

}
