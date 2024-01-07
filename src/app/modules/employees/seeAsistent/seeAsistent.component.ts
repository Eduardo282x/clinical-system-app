import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-asistent',
  templateUrl:'./seeAsistent.component.html',
  styleUrls: ['./seeAsistent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeeAsistentComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
      
  }

}
