import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  public constructor() {}
}
