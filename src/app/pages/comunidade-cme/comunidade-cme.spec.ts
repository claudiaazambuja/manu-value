import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadeCme } from './comunidade-cme';

describe('ComunidadeCme', () => {
  let component: ComunidadeCme;
  let fixture: ComponentFixture<ComunidadeCme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunidadeCme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunidadeCme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
