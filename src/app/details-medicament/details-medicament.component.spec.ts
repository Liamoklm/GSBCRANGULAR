import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMedicamentComponent } from './details-medicament.component';

describe('DetailsMedicamentComponent', () => {
  let component: DetailsMedicamentComponent;
  let fixture: ComponentFixture<DetailsMedicamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMedicamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
