import { Component, OnInit } from '@angular/core';
import { bannerData, cardArray } from './home.data';
import { PayloadService } from 'src/app/core/services/Payload.service';
import { FooterDataState } from 'src/app/core/state/footerData/footerData.state';
import { BannerState } from 'src/app/core/state/banner/bannes.state';
import { Banner } from 'src/app/core/interface/banner/banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  footerData: string[] = [];
  cardArray = cardArray;
  bannerData = bannerData

  constructor(
    private payloadService: PayloadService,
    private bannerState: BannerState,
    private footerDataState: FooterDataState,
  ) {}

  ngOnInit(): void {
    const dataUser = this.payloadService.getDataLocalStorage();
    this.bannerState.setState(this.bannerData);

    this.cardArray = dataUser.Id_Rol == 1 ? this.cardArray : this.cardArray.filter(rol => rol.userRol == dataUser.Id_Rol);
  }
}
