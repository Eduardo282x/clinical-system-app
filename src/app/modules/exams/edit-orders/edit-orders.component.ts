import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-orders',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>edit-orders works!</p>`,
  styleUrls: ['./edit-orders.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditOrdersComponent { }
