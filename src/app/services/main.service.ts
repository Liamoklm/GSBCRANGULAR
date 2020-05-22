import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class MainService{

    medecinSubject = new Subject<any[]>();
    medecins = [];
    rapportsSubject = new Subject<any[]>();
    rapports = [];


    constructor(private httpClient: HttpClient){}


    emitSubject(){
        this.medecinSubject.next(this.medecins.slice());
        this.rapportsSubject.next(this.rapports.slice());
    }

    // Récupère un médecin en fonction de son nom
    getmedecinFromServer(nom){
        this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?noms='+nom).subscribe(
            (reponse) => {
                this.medecins = reponse;
                this.emitSubject();
            }
        )
    }

    // Ajoute un rapport avec les informations passés en paramètres
    //ajoutRapport(date,motif,bilan,idVisiteur,idMedecin) {
     //   return new Promise((resolve, reject) => {
      //      this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?ajoutRapport=%27+date+%22&%22+motif+%22&%22+bilan+%22&%22+idVisiteur+%22&%22+idMedecin).subscribe();
      //      resolve("L'ajout dans la base de donnée à bien fonctionné");
     //   });
   // }

    getRapportFromServer(idMedecin){
        this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?idRapport='+idMedecin).subscribe(
            (reponse) => {
                this.rapports = reponse;
                this.emitSubject();
            });
    }
}