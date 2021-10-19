import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>Tell me your sign!</h1>
    </header>
    
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
}
