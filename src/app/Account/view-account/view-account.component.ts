import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-view-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.scss'
})
export class ViewAccountComponent implements OnInit{

  constructor(private api : ApiService){}

  ngOnInit(): void {
    this.gatDataValue();
  }

  accountData:any;

  gatDataValue(){

    this.api.getData().subscribe(

      (responseData:any)=>{

        this.accountData = responseData;

      },

      err=>{console.log(err)}

    );

  }

}
