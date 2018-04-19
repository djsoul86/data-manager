import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAnotacionesComponent } from './consultar-anotaciones.component';

describe('ConsultarAnotacionesComponent', () => {
  let component: ConsultarAnotacionesComponent;
  let fixture: ComponentFixture<ConsultarAnotacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarAnotacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAnotacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
