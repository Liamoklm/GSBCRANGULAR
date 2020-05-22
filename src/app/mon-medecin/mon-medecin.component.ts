import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../services/main.service';
import { Subscription } from 'rxjs';
import { ngModuleJitUrl } from '@angular/compiler';
 
@Component({
  selector: 'app-mon-medecin',
  templateUrl: './mon-medecin.component.html',
  styleUrls: ['./mon-medecin.component.css']
})
export class MonMedecinComponent implements OnInit {
  medecins: any[];
  rapports : any[];
  nomMedecin = '';
  rapportSubscription : Subscription;
  headElements = ['nom','prenom','téléphone','adresse','département'];

  medecinSubscription: Subscription;
  constructor(private medecinService: MainService){}
  ngOnInit(){
    this.medecinService.getmedecinFromServer(this.nomMedecin);
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe(
      (medecins: any[]) => {
        this.medecins = medecins;

       }
    );
    this.rapportSubscription = this.medecinService.rapportsSubject.subscribe(
      (rapports : any[]) => {
        this.rapports = rapports;
      }
    );
    //Gthis.rechercheMedecin(event);
    this.medecinService.emitSubject()

 
  }
 
  rechercheMedecin(event) {
    if (!event) {
      this.medecinService.getmedecinFromServer(this.nomMedecin);
    }
 
    if (event) {
      this.nomMedecin = event.target.value;
      this.medecinService.getmedecinFromServer(this.nomMedecin);
    }
  }

  afficherRapport(med : any){
    this.medecinService.getRapportFromServer(med.id);

  }
}