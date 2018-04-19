import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPendientesComponent } from './consultar-pendientes.component';

describe('ConsultarPendientesComponent', () => {
  let component: ConsultarPendientesComponent;
  let fixture: ComponentFixture<ConsultarPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
