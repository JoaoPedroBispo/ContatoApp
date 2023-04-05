import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoaquimPage } from './joaquim.page';

describe('JoaquimPage', () => {
  let component: JoaquimPage;
  let fixture: ComponentFixture<JoaquimPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JoaquimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
