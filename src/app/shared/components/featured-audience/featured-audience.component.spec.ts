import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAudienceComponent } from './featured-audience.component';

describe('FeaturedAudienceComponent', () => {
  let component: FeaturedAudienceComponent;
  let fixture: ComponentFixture<FeaturedAudienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedAudienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
