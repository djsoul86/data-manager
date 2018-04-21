import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPassComponent } from './crear-pass.component';

describe('CrearPassComponent', () => {
  let component: CrearPassComponent;
  let fixture: ComponentFixture<CrearPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
