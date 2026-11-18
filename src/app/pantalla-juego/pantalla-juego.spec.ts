import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PantallaJuego } from './pantalla-juego';

describe('PantallaJuego', () => {
  let component: PantallaJuego;
  let fixture: ComponentFixture<PantallaJuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaJuego],
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaJuego);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
