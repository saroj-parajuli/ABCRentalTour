import { Component, signal, effect } from '@angular/core';
import { DatePipe } from '@angular/common';

interface TourDate {
  date: Date;
  address: string;
  agent: string;
}

@Component({
  selector: 'app-scheduling-card',
  standalone: true,
  templateUrl: './scheduling-card.html',
  styleUrls: ['./scheduling-card.less'],
  imports: [DatePipe], // Added DatePipe to imports
})
export class SchedulingCardComponent {
  selectedDate = signal<TourDate | null>({
    date: new Date('2025-09-30'),
    address: '123 Main St, Pittsburgh, PA 12345',
    agent: 'John Doe',
  });
  timeZone = signal('CDT');
  availableTimes = signal(['9:00 AM', '10:00 AM', '11:00 AM', '11:30 AM', '2:00 PM', '3:00 PM', '5:00 PM']);
  selectedTime = signal<string | null>(null);
  bookedTimes = signal<string[]>([]);

  constructor() {
    // Effect for logging state changes
    effect(() => {
      if (this.selectedTime()) {
        console.log(`Selected time updated to: ${this.selectedTime()} at ${new Date().toLocaleTimeString()}`);
      }
    });

    // Pre-select the first available time
    this.selectedTime.set(this.availableTimes().find(time => this.isTimeAvailable(time)) || null);
  }

  selectTime(time: string) {
    this.selectedTime.set(time);
  }

  isTimeAvailable(time: string): boolean {
    return !this.bookedTimes().includes(time);
  }

  bookTour() {
    if (this.selectedTime() && this.selectedDate()) {
      console.log(`Tour booked for ${this.selectedDate()!.date} at ${this.selectedTime()} at ${new Date().toLocaleTimeString()}`);
      this.bookedTimes.update(times => [...times, this.selectedTime()!]);
      this.selectedTime.set(null);
    }
  }
}