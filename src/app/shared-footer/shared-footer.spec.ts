import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFooter } from './shared-footer';

describe('SharedFooter', () => {
  let component: SharedFooter;
  let fixture: ComponentFixture<SharedFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
