import { Component } from '@angular/core';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  getUser(): User {
    return User.getUser();
  }

  logOut(): void {
    this.authService.logOut().subscribe(() => {}, (error) => {
      console.error(error);
    });
  }
}
