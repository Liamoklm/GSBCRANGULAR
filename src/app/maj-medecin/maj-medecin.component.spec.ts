import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajMedecinComponent } from './maj-medecin.component';

describe('MajMedecinComponent', () => {
  let component: MajMedecinComponent;
  let fixture: ComponentFixture<MajMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
