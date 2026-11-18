import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesFanart } from './detalles-fanart';

describe('DetallesFanart', () => {
  let component: DetallesFanart;
  let fixture: ComponentFixture<DetallesFanart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesFanart],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesFanart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
