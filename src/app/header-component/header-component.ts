import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HeaderComponent {
  protected readonly appName = signal('ABCRentalTour');
}
