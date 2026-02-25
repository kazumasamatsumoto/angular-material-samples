import { Component } from '@angular/core';
import { SliderVerificationComponent } from '../../slider-verification/slider-verification.component';
import { RadioVerificationComponent } from '../../radio-verification/radio-verification.component';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [SliderVerificationComponent, RadioVerificationComponent],
  template: `
    <app-slider-verification />
    <section class="section-divider" aria-hidden="true">
      <h2>ラジオボタン</h2>
    </section>
    <app-radio-verification />
  `,
  styles: ['.section-divider { margin-top: 4rem; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 2px solid #e0e0e0; } .section-divider h2 { margin: 0; font-size: 1.5rem; font-weight: 500; color: #1a1a2e; }'],
})
export class Page1Component {}
