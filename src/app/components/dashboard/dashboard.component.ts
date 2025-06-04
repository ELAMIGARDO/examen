import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "../share/head/head.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    HeadComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}
