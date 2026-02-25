import { Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';

export const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'page1', component: Page1Component, data: { backgroundColor: 'white' } },
  { path: 'page2', component: Page2Component, data: { backgroundColor: 'blue' } },
  { path: 'page3', component: Page3Component, data: { backgroundColor: 'blue' } },
];
