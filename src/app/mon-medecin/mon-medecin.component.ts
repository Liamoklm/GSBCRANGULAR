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

  updateMed;
  newMed = {
    firstname: '',
    lastname: '',
    phone: '',
    adresse: '',
    spe: '',
    dep: '',
  };
  addMed = false;

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
  afficherMedecin(med){
    console.log(med);
    this.updateMed = med;
  }
  showAddMedCard(){
    this.addMed = true;
  }

  modifierMedecin(med: any){
    if(med && med.id && med.adresse && med.tel && med.specialitecomplementaire){
      this.medecinService.updateMedecin(med.id, med.adresse, med.tel, med.specialitecomplementaire);
      this.updateMed = null;
    }
  }

  createMedecin() {
    if(this.newMed && this.newMed.firstname && this.newMed.lastname && this.newMed.adresse && this.newMed.dep) {
      console.log(this.newMed);
      this.medecinService.addMedecin(this.newMed.firstname, this.newMed.lastname, this.newMed.phone, this.newMed.adresse, this.newMed.spe, this.newMed.dep);
      this.newMed = {
        firstname: '',
        lastname: '',
        phone: '',
        adresse: '',
        spe: '',
        dep: '',
      };
      this.addMed = false;
    }
  }
}
