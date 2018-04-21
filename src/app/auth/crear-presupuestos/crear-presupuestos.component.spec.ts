import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPresupuestosComponent } from './crear-presupuestos.component';

describe('CrearPresupuestosComponent', () => {
  let component: CrearPresupuestosComponent;
  let fixture: ComponentFixture<CrearPresupuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPresupuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPresupuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
