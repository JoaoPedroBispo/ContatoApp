import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AndrePage } from './andre.page';

describe('AndrePage', () => {
  let component: AndrePage;
  let fixture: ComponentFixture<AndrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AndrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
