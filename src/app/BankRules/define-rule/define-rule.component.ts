import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIURLS } from '../../Constants/globalContants';
import { ApiService } from '../../Services/api.service';


@Component({
  selector: 'app-define-rule',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './define-rule.component.html',
  styleUrl: './define-rule.component.scss'
})
export class DefineRuleComponent {

  ruleName :string = '';
  ruleDesc :string = '';
  ruleProposer : string = '';
  ruleRegion : string = '';

  constructor(private apiService:ApiService){}

  createRule(){
    let requestBody = {
      ruleName : this.ruleName,
      ruleDesc : this.ruleDesc,
      ruleProposer : this.ruleProposer,
      ruleRegion : this.ruleRegion,
      status : "Initiated",
      approvedBy :""
    }
    this.apiService.createData(APIURLS.ruleApiUrl, requestBody).subscribe(
      ()=> {
        alert("Rule submitted Successfully...");
      },
      err => { console.log(err); }
    );

  }
}