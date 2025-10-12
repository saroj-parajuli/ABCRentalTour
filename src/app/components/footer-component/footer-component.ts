import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_CONTENTS } from '../../common/constants';

const { COPYRIGHT, BACK_TO_HOME } = FOOTER_CONTENTS.CONTENTS;

@Component({
  standalone: true,
  selector: 'app-footer-component',
  imports: [RouterLink],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss'
})
export class FooterComponent {
  readonly copyrightText = COPYRIGHT;
    readonly backToHomeLabel = BACK_TO_HOME;
}
