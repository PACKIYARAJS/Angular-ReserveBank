import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getEnvironmentData } from 'worker_threads';
import { APIURLS } from '../../Constants/globalContants';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent implements OnInit{
        AccountName : string = 'HDFC';
        bankName :string ='';
        headOffice : string='';
        NoOfBranches : number=0;
        TotalBalance : number=0;
        ExpectedGrowthRate : number=0;
        NoOfCustomers : number= 0;
        Email:string='';
        Mobile:number =0;


  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getData();
  }

  RegisterBank(){

    let RequestBody= {
      bankName : this.bankName,
      headOffice : this.headOffice,
      NoOfBranches : this.NoOfBranches,
      TotalBalance : this.TotalBalance,
      ExpectedGrowthRate : this.ExpectedGrowthRate,
      NoOfCustomers : this.NoOfCustomers,
      Email : this.Email,
      Mobile : this.Mobile
    }
    
    this.api.createData(APIURLS.RegApiUrl, RequestBody).subscribe(
      (response:any)=>{
        alert("Created account sucessfully");
      },
      err=>{console.log(err)}
    );
  }

  getData(){
    this.api.getData(APIURLS.RegApiUrl).subscribe(
      (response:any)=>{
        console.log(response);
      },
      err=>{console.log(err)}
    );
  }
}
