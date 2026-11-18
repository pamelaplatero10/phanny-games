import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FondoEstrellado } from './fondo-estrellado';

describe('FondoEstrellado', () => {
  let component: FondoEstrellado;
  let fixture: ComponentFixture<FondoEstrellado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoEstrellado],
    }).compileComponents();

    fixture = TestBed.createComponent(FondoEstrellado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
