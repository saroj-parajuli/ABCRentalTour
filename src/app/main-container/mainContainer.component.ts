import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer-component/footer-component';
import { HeaderComponent } from '../components/header-component/header-component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'main-container',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule],
  templateUrl: './mainContainer.component.html',
  styleUrls: ['./mainContainer.component.scss']
})
export class MainContainer {
  protected readonly title = signal('ABCRental');
}
