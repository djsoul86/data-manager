import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConsumotarjetasComponent } from './ver-consumotarjetas.component';

describe('VerConsumotarjetasComponent', () => {
  let component: VerConsumotarjetasComponent;
  let fixture: ComponentFixture<VerConsumotarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerConsumotarjetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerConsumotarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
