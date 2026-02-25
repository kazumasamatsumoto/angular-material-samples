import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-verification',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './radio-verification.component.html',
  styleUrl: './radio-verification.component.scss',
})
export class RadioVerificationComponent {
  /** 基本ラジオ */
  basicFavorite = 'apple';

  /** 色バリアント用 */
  colorPrimary = 'option1';
  colorAccent = 'option1';
  colorWarn = 'option1';

  /** ラベル位置 */
  labelBefore = 'yes';
  labelAfter = 'yes';

  /** 無効化 */
  disabledSelected = 'a';

  /** カスタム色用 */
  customSelected = 'x';

  /** 色反転用 */
  invertedSelected = 'a';
}
