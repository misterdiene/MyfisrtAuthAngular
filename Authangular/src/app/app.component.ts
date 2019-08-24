import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Authangular';

  /**
   * Pour inserer un logOut dans notre application 
   */
  // tslint:disable-next-line: variable-name
  constructor(private _authService: AuthService) { }
}

