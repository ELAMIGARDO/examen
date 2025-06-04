import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatToolbarModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
