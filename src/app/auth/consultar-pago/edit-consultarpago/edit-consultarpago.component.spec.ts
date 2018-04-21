import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsultarpagoComponent } from './edit-consultarpago.component';

describe('EditConsultarpagoComponent', () => {
  let component: EditConsultarpagoComponent;
  let fixture: ComponentFixture<EditConsultarpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConsultarpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsultarpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
