import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanPlayerInfoComponent } from './clan-player-info.component';

describe('ClanPlayerInfoComponent', () => {
  let component: ClanPlayerInfoComponent;
  let fixture: ComponentFixture<ClanPlayerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanPlayerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanPlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
