import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuroNovela } from './muro-novela';

describe('MuroNovela', () => {
  let component: MuroNovela;
  let fixture: ComponentFixture<MuroNovela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuroNovela],
    }).compileComponents();

    fixture = TestBed.createComponent(MuroNovela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
