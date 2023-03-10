import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

  closeDialog(){
    this.dialogRef.close(false);
  }
}
