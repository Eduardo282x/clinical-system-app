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

  
  parseShortDate(date: Date): string{
    const options: Intl.DateTimeFormatOptions = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit"
    };

    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  }
}
