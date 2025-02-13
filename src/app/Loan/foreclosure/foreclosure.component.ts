import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foreclosure',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './foreclosure.component.html',
  styleUrl: './foreclosure.component.scss'
})
export class ForeclosureComponent implements OnInit {

  @Input() loanAmt : any;

  foreAmt : string="";

  @Output() sendData  = new EventEmitter<string>();

  ngOnInit(): void {
    this.foreAmt='';
  }

  send(){
    this.sendData.emit(this.foreAmt)
  }
}
