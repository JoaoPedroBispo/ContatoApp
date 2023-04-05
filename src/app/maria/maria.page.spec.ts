import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MariaPage } from './maria.page';

describe('MariaPage', () => {
  let component: MariaPage;
  let fixture: ComponentFixture<MariaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
