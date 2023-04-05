import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AghataPage } from './aghata.page';

describe('AghataPage', () => {
  let component: AghataPage;
  let fixture: ComponentFixture<AghataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AghataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
