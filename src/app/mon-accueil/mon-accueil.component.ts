import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mon-accueil',
  templateUrl: './mon-accueil.component.html',
  styleUrls: ['./mon-accueil.component.css']
})
export class MonAccueilComponent implements OnInit {
  user: any[];
  logoGSB: any = '../assets/images/logoGSB.jpg';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.user;
    
  }

}
