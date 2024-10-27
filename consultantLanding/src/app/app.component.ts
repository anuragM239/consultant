import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ConsHomeComponent } from "../components/cons-home/cons-home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ConsHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consFE';
}
