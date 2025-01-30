import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { CreateAccountComponent } from './Account/create-account/create-account.component';
import { AdminAccountComponent } from './Account/admin-account/admin-account.component';
import { AdminRupeeComponent } from './Rupee/admin-rupee/admin-rupee.component';
import { ViewAccountComponent } from './Account/view-account/view-account.component';
import { CloseAccountComponent } from './Account/close-account/close-account.component';
import { AdminRuleComponent } from './BankRules/admin-rule/admin-rule.component';
import { DefineRuleComponent } from './BankRules/define-rule/define-rule.component';
import { ApplyLoanComponent } from './Loan/apply-loan/apply-loan.component';
import { LoanAdminComponent } from './Loan/loan-admin/loan-admin.component';
import { PayLoanComponent } from './Loan/pay-loan/pay-loan.component';
import { ViewLoanComponent } from './Loan/view-loan/view-loan.component';
import { RupeeRequestComponent } from './Rupee/rupee-request/rupee-request.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CreateAccountComponent , AdminAccountComponent, CloseAccountComponent, ViewAccountComponent, 
            AdminRuleComponent, DefineRuleComponent, 
            ApplyLoanComponent, LoanAdminComponent, PayLoanComponent, ViewLoanComponent, 
            AdminRupeeComponent, RupeeRequestComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:String = 'Reserve-Bank';
  // router:Router = new Router;

  //Dependency Injection

  constructor(private router: Router){}

  gotoRupeeAdmin(){

    this.router.navigate(['/admin-rupee'])

  }

  goToAdmin(){

    this.router.navigate(['/admin-account']);

  }

}
