import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';


@Injectable()
export class AuthService{
  userSubject = new Subject<any[]>();
  isAuth = false;
  user: User[] = [];

  constructor(private httpClient: HttpClient){}

  getUserInfo(login, mdp) {
    return new Promise((resolve, reject) => {
      this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?login='+login).subscribe(
        authData => {
          if(authData[0] !== undefined)
          {
            if(login === authData[0].login && mdp === authData[0].mdp){
              this.user.push(authData[0]);
              this.isAuth = true;
              resolve(this.user[0].id);
            }
            else{
              resolve("Le mot de passe est incorrect !");
            }
          }
          else{
            resolve("Votre identifiant n'est pas reconnu !");
          }
        });
      });
    }
  
  signOut(){
    this.isAuth = false;
    this.user = [];
  }

  emitUserSuject(){
    this.userSubject.next(this.user.slice());
}
}
