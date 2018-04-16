import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipopagoComponent } from './edit-tipopago.component';

describe('EditTipopagoComponent', () => {
  let component: EditTipopagoComponent;
  let fixture: ComponentFixture<EditTipopagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTipopagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
