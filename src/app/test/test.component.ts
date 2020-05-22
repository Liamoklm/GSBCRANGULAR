import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { testService } from '../services/testService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  medicaments: any[];
  familles: any[];
  nomMedoc = '';
  familleSubscription : Subscription;
  headElements = ['nom Commercial','Composition','effets','contre Indications'];
  
  medicamentSubscription: Subscription;
  constructor(private medicamentService: testService){}
  ngOnInit(){
    this.medicamentService.getmedicamentFromServer(this.nomMedoc);
    this.medicamentSubscription = this.medicamentService.medicamentSubject.subscribe(
      (medicaments: any[]) => {
        this.medicaments = medicaments;

      }
    );
      this.familleSubscription = this.medicamentService.familleSubject.subscribe(
      (familles : any[]) => {
        this.familles = familles;
      }
    );
    this.rechercheMedicament(event);
    this.medicamentService.emitSubject();


  }

  rechercheMedicament(event) {
    if (!event) {
      this.medicamentService.getmedicamentFromServer(this.nomMedoc);
    }

    if (event) {
      this.nomMedoc = event.target.value;
      this.medicamentService.getmedicamentFromServer(this.nomMedoc);
    }
  }

  afficherFamille(med : any){
    this.medicamentService.getFamilleFromServer(med.idFamille);

  }
}



