import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-content">
      <h2>ページ 3</h2>
      <p>このページの背景色は青色です。</p>
      <nav class="page-nav">
        <a routerLink="/page1">ページ1へ</a>
        <a routerLink="/page2">ページ2へ</a>
      </nav>
    </div>
  `,
  styles: ['.page-content { padding: 2rem; } .page-content h2 { margin: 0 0 1rem 0; font-size: 1.5rem; } .page-nav { margin-top: 2rem; display: flex; gap: 1rem; } .page-nav a { color: inherit; text-decoration: underline; }'],
})
export class Page3Component {}
