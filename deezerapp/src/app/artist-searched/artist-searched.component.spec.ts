import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSearchedComponent } from './artist-searched.component';

describe('ArtistSearchedComponent', () => {
  let component: ArtistSearchedComponent;
  let fixture: ComponentFixture<ArtistSearchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSearchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
