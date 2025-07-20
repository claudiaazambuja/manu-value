import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoriaValue } from './mentoria-value';

describe('MentoriaValue', () => {
  let component: MentoriaValue;
  let fixture: ComponentFixture<MentoriaValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentoriaValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentoriaValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
