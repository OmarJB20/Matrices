import { Component } from '@angular/core';
import { MatrixComponent } from './matriz/matrix.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatrixComponent],
  template: `
    <h1>Bienvenido a Matrix </h1>
    <app-matrix></app-matrix>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
