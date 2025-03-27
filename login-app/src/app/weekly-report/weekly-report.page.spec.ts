import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeeklyReportPage } from './weekly-report.page';

describe('WeeklyReportPage', () => {
  let component: WeeklyReportPage;
  let fixture: ComponentFixture<WeeklyReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
