import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-matrix',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent {
  matriz3x3 = this.generateMatrix(3);
  matriz4x4 = this.generateMatrix(4);
  matriz5x5 = this.generateMatrix(5);
  matriz6x6 = this.generateMatrix(6);

  generateMatrix(size: number): number[] {
    return Array.from({ length: size * size }, (_, i) => i + 1);
  }
}
