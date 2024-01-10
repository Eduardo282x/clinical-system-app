import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-asistent',
  templateUrl:'./seeAsistent.component.html',
  styleUrls: ['./seeAsistent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class SeeAsistentComponent implements OnInit {

  minDate: Date = new Date();
  maxDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {
      const currentYear = new Date().getFullYear();
      const dateToday = new Date();

      
      
      this.minDate = new Date(currentYear, 0, 1);
      this.maxDate = new Date(currentYear, dateToday.getMonth(), dateToday.getDate());
  }

}
