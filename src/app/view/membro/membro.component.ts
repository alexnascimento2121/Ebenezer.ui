import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.css']
})
export class MembroComponent implements OnInit {

  constructor(private router: Router) {    

  }

  ngOnInit(): void {}

  navigateToMembroCreate(){
    this.router.navigate(['/membro/create'])
  }

}
