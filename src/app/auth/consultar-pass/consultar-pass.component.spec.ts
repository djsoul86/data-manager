import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPassComponent } from './consultar-pass.component';

describe('ConsultarPassComponent', () => {
  let component: ConsultarPassComponent;
  let fixture: ComponentFixture<ConsultarPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
