import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consultantlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consultantlogin.component.html',
  styleUrl: './consultantlogin.component.css'
})
export class ConsultantloginComponent {
  onSubmit() {
    console.log('Form submitted');
    alert('Submitted')
  }

}
