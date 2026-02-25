import { Component } from '@angular/core';
import { SliderVerificationComponent } from './slider-verification/slider-verification.component';

@Component({
  selector: 'app-root',
  imports: [SliderVerificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Material Slider 検証';
}
