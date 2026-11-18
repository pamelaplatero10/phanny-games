import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilJugador } from './perfil-jugador';

describe('PerfilJugador', () => {
  let component: PerfilJugador;
  let fixture: ComponentFixture<PerfilJugador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilJugador],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilJugador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
