import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider-verification',
  standalone: true,
  imports: [MatSliderModule, FormsModule],
  templateUrl: './slider-verification.component.html',
  styleUrl: './slider-verification.component.scss',
})
export class SliderVerificationComponent {
  /** 基本スライダーの値 */
  basicValue = 50;

  /** 範囲スライダーの値 */
  rangeStart = 25;
  rangeEnd = 75;

  /** 色変更検証用スライダー */
  primaryValue = 30;
  accentValue = 60;
  warnValue = 80;

  /** ラベル表示スライダー */
  labeledValue = 50;

  /** スナップ付きスライダー */
  steppedValue = 50;

  /** カスタムCSS用スライダー */
  customRedValue = 40;
  customGreenValue = 70;

  /** 完全カスタマイズ用スライダー */
  fullCustomValue = 50;

  /** サムサイズ変更用スライダー */
  thumbSizeSmallValue = 50;
  thumbSizeDefaultValue = 50;
  thumbSizeLargeValue = 50;
  thumbPurpleYellowValue = 50;

  formatLabel(value: number): string {
    return `${value}%`;
  }
}
