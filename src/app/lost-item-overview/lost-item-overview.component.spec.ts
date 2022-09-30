import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostItemOverviewComponent } from './lost-item-overview.component';

describe('LostItemOverviewComponent', () => {
  let component: LostItemOverviewComponent;
  let fixture: ComponentFixture<LostItemOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostItemOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostItemOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
