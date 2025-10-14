import { Component, signal, effect, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-scheduling-card',
  standalone: true,
  templateUrl: './scheduling-card.html',
  styleUrls: ['./scheduling-card.scss'],
  imports: [MatCardModule, MatButtonModule, MatChipsModule, MatIconModule, CommonModule, DatePipe, MatSnackBarModule]
})
export class SchedulingCardComponent {
  readonly today = new Date(); 
  readonly availableTimes = computed(() => this.generateAvailableTimes(this.selectedDate()));
  readonly bookedTimes = signal<string[]>([]);
  readonly selectableDates = signal<Date[]>([]);
  readonly selectedDate = signal<Date>(this.today);
  readonly selectedTime = signal<string | null>(null);
  readonly timeZone = signal<string>('CDT');

  constructor(private _snackBar: MatSnackBar) {
    this.selectableDates.set(this.generateBusinessDays(this.today, 7));

    effect(() => {
      const firstAvailable = this.availableTimes().find((time:string) => this.isTimeAvailable(time));
      this.selectedTime.set(firstAvailable || null);
    });
  }

  selectTime(time: string) {
    this.selectedTime.set(time);
  }

  selectDate(date: Date) {
    this.selectedDate.set(date);
  }

  isTimeAvailable(time: string): boolean {
    return !this.bookedTimes().includes(time);
  }

  bookTour() {
    if (this.selectedTime()) {
      const message = `Tour booked for ${this.selectedDate().toLocaleDateString()} at ${this.selectedTime()}`;
      this._snackBar.open(message, 'Dismiss', {
        duration: 3000,
      });
      this.bookedTimes.update((times:string[]) => [...times, this.selectedTime()!]);
      this.selectedTime.set(null);
    }
  }

  showMoreDates() {
    const currentDates = this.selectableDates();
    const lastDate = currentDates[currentDates.length - 1];
    const nextDay = new Date(lastDate);
    nextDay.setDate(nextDay.getDate() + 1);

    const moreDates = this.generateBusinessDays(nextDay, 3); // Increased from 7 to 14
    this.selectableDates.update((dates:Date[]) => [...dates, ...moreDates]);
  }

  private generateBusinessDays(startDate: Date, count: number): Date[] {
    const dates: Date[] = [];
    let currentDate = new Date(startDate);
    while (dates.length < count) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sunday (0) and Saturday (6)
        dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  private generateAvailableTimes(date: Date): string[] {
    const availableTimes: string[] = [];
    const officeStartTime = new Date(date);
    officeStartTime.setHours(9, 0, 0, 0);

    const officeEndTime = new Date(date);
    officeEndTime.setHours(17, 0, 0, 0);

    const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    let time = new Date(officeStartTime);
    while (time < officeEndTime) {
      availableTimes.push(timeFormatter.format(time));
      time.setMinutes(time.getMinutes() + 30);
    }
    return availableTimes;
  }
}