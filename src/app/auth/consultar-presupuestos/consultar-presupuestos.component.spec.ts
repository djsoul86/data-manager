import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPresupuestosComponent } from './consultar-presupuestos.component';

describe('ConsultarPresupuestosComponent', () => {
  let component: ConsultarPresupuestosComponent;
  let fixture: ComponentFixture<ConsultarPresupuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPresupuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPresupuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
