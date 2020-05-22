import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonAccueilComponent } from './mon-accueil.component';

describe('MonAccueilComponent', () => {
  let component: MonAccueilComponent;
  let fixture: ComponentFixture<MonAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
