import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cons-home',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './cons-home.component.html',
  styleUrl: './cons-home.component.css'
})
export class ConsHomeComponent {
  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
