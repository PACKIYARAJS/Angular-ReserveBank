import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForeclosureComponent } from '../foreclosure/foreclosure.component';

@Component({
  selector: 'app-pay-loan',
  standalone: true,
  imports: [CommonModule, FormsModule, ForeclosureComponent],
  templateUrl: './pay-loan.component.html',
  styleUrl: './pay-loan.component.scss'
})
export class PayLoanComponent {

  loanAmt : string="";

  foreAmt : any ='12345';

  getData(val:any)
  {
    this.foreAmt = val;
  }

}
