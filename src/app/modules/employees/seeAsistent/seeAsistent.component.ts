import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { EmployesService } from 'src/app/core/services/employes/employes.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-see-asistent',
  templateUrl:'./seeAsistent.component.html',
  styleUrls: ['./seeAsistent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SeeAsistentComponent extends BaseComponent implements OnInit {

  minDate: Date = new Date();
  maxDate: Date = new Date();

  assistentForm: FormGroup = new FormGroup({
    DateStart: new FormControl('', Validators.required),
    DateEnd: new FormControl('', Validators.required)
  })

  constructor(
    private employeService: EmployesService
  ) {
    super();
  }

  ngOnInit(): void {
      const currentYear = new Date().getFullYear();
      const dateToday = new Date();
      this.minDate = new Date(currentYear, 0, 1);
      this.maxDate = new Date(currentYear, dateToday.getMonth(), dateToday.getDate());
  }

  getAssistent(): void {
    this.employeService.getAssistentPDF(this.assistentForm.value);
  }

}
