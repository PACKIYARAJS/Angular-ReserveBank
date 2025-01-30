import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-admin-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-account.component.html',
  styleUrl: './admin-account.component.scss'
})
export class AdminAccountComponent implements OnInit{

  showOn : boolean = false;
  constructor(private api : ApiService){}

  account : any;

  ngOnInit(): void {
    this.getDataValue();
  }

  getDataValue(){

    this.api.getData().subscribe(
      (res:any)=>{
        this.account = res; 
      },

      err=>{console.log(err)}
    )
  }

 

}
