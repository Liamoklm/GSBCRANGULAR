import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { testService } from '../services/testService';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-details-medicament',
  templateUrl: './details-medicament.component.html',
  styleUrls: ['./details-medicament.component.css']
})
export class DetailsMedicamentComponent implements OnInit {

  medicaments: any[];

  constructor(private route: ActivatedRoute, private testService: testService, router: Router) { }

  ngOnInit(){
    

  }

}
