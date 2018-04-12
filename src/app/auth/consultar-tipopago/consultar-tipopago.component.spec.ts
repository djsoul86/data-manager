import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTipopagoComponent } from './consultar-tipopago.component';

describe('ConsultarTipopagoComponent', () => {
  let component: ConsultarTipopagoComponent;
  let fixture: ComponentFixture<ConsultarTipopagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarTipopagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarTipopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
