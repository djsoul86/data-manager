import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpotifyComponent } from './edit-spotify.component';

describe('EditSpotifyComponent', () => {
  let component: EditSpotifyComponent;
  let fixture: ComponentFixture<EditSpotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
