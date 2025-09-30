import { CommonModule } from '@angular/common';
import { Component, signal, effect, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-scheduling-card',
  standalone: true,
  templateUrl: './scheduling-card.html',
  styleUrls: ['./scheduling-card.scss'], // Changed from .less to .scss
  imports: [MatCardModule, MatButtonModule, MatChipsModule, MatIconModule, CommonModule],
})
export class SchedulingCardComponent {
  readonly today = new Date();
  readonly availableTimes = computed(() => this.generateAvailableTimes(this.selectedDate()));
  readonly bookedTimes = signal<string[]>([]);
  readonly selectedDate = signal<Date>(this.today);
  readonly selectedTime = signal<string | null>(null);
  readonly timeZone = signal<string>('EDT');

  constructor() {
    effect(() => { // Runs when availableTimes or bookedTimes changes
      const firstAvailable = this.availableTimes().find(time => this.isTimeAvailable(time));
      this.selectedTime.set(firstAvailable || null);
    });
  }

  selectTime(time: string) {
    this.selectedTime.set(time);
  }

  isTimeAvailable(time: string): boolean {
    return !this.bookedTimes().includes(time);
  }

  bookTour() {
    if (this.selectedTime()) {
      console.log(`Tour booked for ${this.selectedDate()} at ${this.selectedTime()} at ${new Date().toLocaleTimeString()}`);
      this.bookedTimes.update(times => [...times, this.selectedTime()!]);
      this.selectedTime.set(null);
    }
  }

  showMoreDates() {
    console.log('Showing more dates...');
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
