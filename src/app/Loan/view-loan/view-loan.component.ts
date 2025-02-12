import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-loan.component.html',
  styleUrl: './view-loan.component.scss'
})
export class ViewLoanComponent {

  loans = [{loanID:111, amt : 20000},{loanID:112, amt : 25000},{loanID:113, amt : 30000}]

}
