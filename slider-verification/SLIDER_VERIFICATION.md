# Angular Material 20.2.14 スライダー色変更検証

このアプリケーションは Angular Material 20.2.14 のスライダーコンポーネントにおける**色の変更**検証を行うための環境です。

## 起動方法

```bash
cd slider-verification
npm install
npm start
```

ブラウザで http://localhost:4200 を開いてください。

## 検証内容

アプリケーションには以下の検証用セクションが用意されています：

### 1. 基本スライダー
標準の `mat-slider` の動作確認

### 2. 範囲スライダー
開始値・終了値を選択できるレンジスライダー

### 3. 色の変更検証（color プロパティ）
- **Primary / Accent / Warn**: `color` プロパティによる色指定
- **注意**: Angular Material 20 の M3 テーマでは `color` プロパティは**無効**です
- M2 互換スタイルがある場合のみ色が変わります

### 4. ラベル表示スライダー
`discrete` と `displayWith` による値表示

### 5. ティックマーク付きスライダー
`showTickMarks` による目盛り表示

### 6. カスタム CSS による色オーバーライド
M3 テーマではデザイントークンや CSS 変数で色をカスタマイズできます。

### 7. 完全カスタマイズ
左トラック・丸（ノブ）・右トラックを個別に色指定。ノブの外枠は `.mdc-slider__thumb-knob` で指定。

### 8. サム（ノブ）の大きさ変更
`--mat-slider-handle-width` と `--mat-slider-handle-height` でサムのサイズを変更。

## 技術情報

- **Angular Material**: 20.2.14
- **Angular CDK**: 20.2.14
- **テーマ**: M3 (Material 3)

## 完全カスタマイズの方法

各部品を個別に色指定する場合、`mat-slider` をラップした要素にクラスを付け、以下を設定します。

### 利用可能な CSS 変数（--mat-slider-*）

| 変数名 | 対象 |
|--------|------|
| `--mat-slider-active-track-color` | 左側（塗りつぶし部分） |
| `--mat-slider-inactive-track-color` | 右側（未塗り部分） |
| `--mat-slider-handle-color` | 丸（ノブ）の色 |
| `--mat-slider-hover-handle-color` | ホバー時のノブ色 |
| `--mat-slider-focus-handle-color` | フォーカス時のノブ色 |
| `--mat-slider-ripple-color` | リップル効果の色 |
| `--mat-slider-handle-width` | サムの幅（デフォルト: 20px） |
| `--mat-slider-handle-height` | サムの高さ（デフォルト: 20px） |

### ノブの外枠（枠線）

ノブの外枠は CSS 変数では指定できないため、子コンポーネント内の要素に `::ng-deep` でスタイルを適用します。

```scss
.ラッパークラス ::ng-deep .mdc-slider__thumb .mdc-slider__thumb-knob {
  box-shadow: 0 0 0 3px #2196f3 !important;  // 青枠の例
}
```

### 例: 左=黄・丸=白+青枠・右=赤

```scss
.full-custom-slider mat-slider {
  --mat-slider-active-track-color: #ffeb3b;      // 左: 黄色
  --mat-slider-inactive-track-color: #f44336;   // 右: 赤色
  --mat-slider-handle-color: #ffffff;           // 丸: 白色
  --mat-slider-hover-handle-color: #ffffff;
  --mat-slider-focus-handle-color: #ffffff;
}

.full-custom-slider ::ng-deep .mdc-slider__thumb .mdc-slider__thumb-knob {
  box-shadow: 0 0 0 3px #2196f3 !important;     // 丸の外枠: 青色
}
```

## 参考リンク

- [Slider - Angular Material](https://material.angular.dev/components/slider)
- [Slider Styling (M3)](https://material.angular.dev/components/slider/styling)
