import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface MonthlyReport {
  totalSales: number;
  orders: number;
  averageOrderValue: number;
  newCustomers: number;
  conversionRate: number;
  customerSatisfaction: number;
  returnRate: number;
  month: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor() {}

  getMonthlyReport(month: string, year: number): Observable<MonthlyReport> {
    // In a real application, this would be an HTTP call to your backend
    // For demo purposes, we'll return mock data
    const mockReport: MonthlyReport = {
      totalSales: 45678,
      orders: 234,
      averageOrderValue: 195.20,
      newCustomers: 45,
      conversionRate: 3.2,
      customerSatisfaction: 4.5,
      returnRate: 1.8,
      month: month,
      year: year
    };

    return of(mockReport);
  }
} 