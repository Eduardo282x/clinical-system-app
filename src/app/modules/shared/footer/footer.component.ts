import { Component, OnInit } from '@angular/core';
import { FooterDataState } from 'src/app/core/state/footerData/footerData.state';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerData: string[] = [];

  constructor(
    private footerDataState: FooterDataState
  ){

  }

  ngOnInit(): void {
    this.footerDataState.getState$().subscribe({
      next: (footerData: any) => {
        this.footerData = footerData;
      }
    })
  }
}
