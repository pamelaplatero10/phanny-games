import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuroFanarts } from './muro-fanarts';

describe('MuroFanarts', () => {
  let component: MuroFanarts;
  let fixture: ComponentFixture<MuroFanarts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuroFanarts],
    }).compileComponents();

    fixture = TestBed.createComponent(MuroFanarts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
