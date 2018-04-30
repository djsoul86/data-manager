import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargararchivosComponent } from './cargararchivos.component';

describe('CargararchivosComponent', () => {
  let component: CargararchivosComponent;
  let fixture: ComponentFixture<CargararchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargararchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargararchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
