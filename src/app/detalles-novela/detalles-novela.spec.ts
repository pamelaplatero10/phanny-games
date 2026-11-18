import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesNovela } from './detalles-novela';

describe('DetallesNovela', () => {
  let component: DetallesNovela;
  let fixture: ComponentFixture<DetallesNovela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesNovela],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesNovela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
