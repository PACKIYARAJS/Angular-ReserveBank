import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foreclosure',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './foreclosure.component.html',
  styleUrl: './foreclosure.component.scss'
})
export class ForeclosureComponent implements OnInit {

  @Input() loanAmt : any;

  foreAmt : string="";

  @Output() sendData : EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.foreAmt='';
  }

  send(){
    this.sendData.emit(this.foreAmt)
  }
}
