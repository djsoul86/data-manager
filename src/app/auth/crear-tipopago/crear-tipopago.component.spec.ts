import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipopagoComponent } from './crear-tipopago.component';

describe('CrearTipopagoComponent', () => {
  let component: CrearTipopagoComponent;
  let fixture: ComponentFixture<CrearTipopagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTipopagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
