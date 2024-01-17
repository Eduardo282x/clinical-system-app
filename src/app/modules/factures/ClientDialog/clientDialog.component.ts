import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResponseClient } from 'src/app/core/interface/BaseResponse';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './clientDialog.component.html',
  styleUrls: ['./clientDialog.component.css'],
})
export class ClientDialogComponent implements OnInit{ 
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResponseClient
  ){}

  ngOnInit(): void {
      console.log(this.data);
  }
}
