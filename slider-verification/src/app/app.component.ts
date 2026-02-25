import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular Material Slider 検証';
  backgroundColor: 'white' | 'blue' = 'white';

  constructor(private router: Router) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.updateBackground());
    this.updateBackground();
  }

  private updateBackground(): void {
    let route = this.router.routerState.root;
    while (route.firstChild) route = route.firstChild;
    const data = route.snapshot.data;
    const bg = data?.['backgroundColor'];
    this.backgroundColor = bg === 'blue' ? 'blue' : 'white';
  }
}
