import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPendientesComponent } from './crear-pendientes.component';

describe('CrearPendientesComponent', () => {
  let component: CrearPendientesComponent;
  let fixture: ComponentFixture<CrearPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
