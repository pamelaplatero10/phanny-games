import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelDesarrollador } from './panel-desarrollador';

describe('PanelDesarrollador', () => {
  let component: PanelDesarrollador;
  let fixture: ComponentFixture<PanelDesarrollador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelDesarrollador],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelDesarrollador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
