import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicarNovela } from './publicar-novela';

describe('PublicarNovela', () => {
  let component: PublicarNovela;
  let fixture: ComponentFixture<PublicarNovela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicarNovela],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicarNovela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
