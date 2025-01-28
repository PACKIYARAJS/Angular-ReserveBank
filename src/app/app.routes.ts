import { Routes } from '@angular/router';
import { AdminAccountComponent } from './Account/admin-account/admin-account.component';
import { CloseAccountComponent } from './Account/close-account/close-account.component';
import { CreateAccountComponent } from './Account/create-account/create-account.component';
import { ViewAccountComponent } from './Account/view-account/view-account.component';
import { AdminRuleComponent } from './BankRules/admin-rule/admin-rule.component';
import { DefineRuleComponent } from './BankRules/define-rule/define-rule.component';
import { ApplyLoanComponent } from './Loan/apply-loan/apply-loan.component';
import { LoanAdminComponent } from './Loan/loan-admin/loan-admin.component';
import { PayLoanComponent } from './Loan/pay-loan/pay-loan.component';
import { ViewLoanComponent } from './Loan/view-loan/view-loan.component';
import { AdminRupeeComponent } from './Rupee/admin-rupee/admin-rupee.component';
import { RupeeRequestComponent } from './Rupee/rupee-request/rupee-request.component';

export const routes: Routes = [
{path:'create-account', component: CreateAccountComponent},
{path:'admin-account', component: AdminAccountComponent},
{path:'close-account', component: CloseAccountComponent},
{path:'view-account', component: ViewAccountComponent},
{path:'admin-rule', component: AdminRuleComponent},
{path:'define-rule', component: DefineRuleComponent},
{path:'apply-loan', component: ApplyLoanComponent},
{path:'loan-admin', component: LoanAdminComponent},
{path:'pay-loan', component: PayLoanComponent},
{path:'view-loan', component: ViewLoanComponent},
{path:'admin-rupee', component: AdminRupeeComponent},
{path:'rupee-request', component: RupeeRequestComponent},

];
