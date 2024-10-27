import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../../services/authorization.service';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  
  _authorization:AuthorizationService;
  constructor(private authorization: AuthorizationService, private router: Router) {
    this._authorization=authorization;
  }

  onSubmit(form: any) {
    const { username, password } = form.value;

    if (this._authorization.loginFunc(username, password)) {
      this.router.navigateByUrl("admin");
    } else {
      alert('Invalid username or password'); 
    }
  }

}
