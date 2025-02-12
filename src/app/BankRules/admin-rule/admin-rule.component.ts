import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-admin-rule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-rule.component.html',
  styleUrl: './admin-rule.component.scss'
})
export class AdminRuleComponent implements OnInit{

  apiUrl = "https://retoolapi.dev/03g07B/data";

  rulesDetails :any;
  ruleStatuses = ['Approved', 'Rejected', 'Initiated'];
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
   this.getRulesDetails();
  }

  getRulesDetails(){
    this.apiService.getData(this.apiUrl).subscribe(
      (responseData) => {
        this.rulesDetails = responseData;
        console.log(this.rulesDetails);
      },
      err => { console.log(err); }
    );
  }

  updateRule(record:any, statusType:string){
    let requestBody = record;
    if(statusType == 'approved')
      requestBody.status = "Approved";
    else
      requestBody.status = "Rejected";

      requestBody.approvedBy = 'Raj';
    this.apiService.updateData(this.apiUrl, requestBody, record.id).subscribe(
      () => { 
        alert("Rule is successfully updated..");
      },
      err => { console.log(err)}
    );
  }


}