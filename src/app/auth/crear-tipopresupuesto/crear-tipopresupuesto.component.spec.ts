import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipopresupuestoComponent } from './crear-tipopresupuesto.component';

describe('CrearTipopresupuestoComponent', () => {
  let component: CrearTipopresupuestoComponent;
  let fixture: ComponentFixture<CrearTipopresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTipopresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipopresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
