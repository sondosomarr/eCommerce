import { Component } from '@angular/core';
// import { HomePageComponent } from './home-page/home-page.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eCommerce';
}
