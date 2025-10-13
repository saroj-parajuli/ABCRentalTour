import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer-component/footer-component';
import { HeaderComponent } from '../components/header-component/header-component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected readonly title = signal('ABCRental');
}
