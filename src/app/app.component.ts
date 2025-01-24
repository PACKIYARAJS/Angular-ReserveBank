import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CreateAccountComponent } from './Account/create-account/create-account.component';
import { AdminAccountComponent } from './Account/admin-account/admin-account.component';
import { AdminRupeeComponent } from './Rupee/admin-rupee/admin-rupee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CreateAccountComponent , AdminAccountComponent, AdminRupeeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:String = 'Reserve-Bank';
}
