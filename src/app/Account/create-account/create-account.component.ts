import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
        AccountName : String = 'HDFC';
        bankName ='';
        headOffice='';
        NoOfBranches=0;
        TotalBalance=0;
        ExpectedGrowthRate=0;
        NoOfCustomers = 0;

  RegisterBank(){

    let RequestBody= {
      bankName : this.bankName,
      headOffice : this.headOffice,
      NoOfBranches : this.NoOfBranches,
      TotalBalance : this.TotalBalance,
      ExpectedGrowthRate : this.ExpectedGrowthRate,
      NoOfCustomers : this.NoOfCustomers,
    }
    console.log(RequestBody);
  }
}
