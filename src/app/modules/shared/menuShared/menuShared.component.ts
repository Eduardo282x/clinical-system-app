import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuOption } from 'src/app/core/interface/menuOption/MenuOption';

@Component({
  selector: 'app-menu-shared',
  templateUrl: './menuShared.component.html',
  styleUrls: ['./menuShared.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSharedComponent implements OnInit{ 

  @Input() optionMenu: MenuOption[] = [];
  @Output() nameModule = new EventEmitter<string>();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      "empleados",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/Empleados.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "impresora",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/Impresora.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "asistencia",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/Asistencia.svg')
    );
  }

  ngOnInit(): void {
      
  }

  sendModule(module: MenuOption): void{
    this.optionMenu.map(option => option.selectedModule = false)
    module.selectedModule = true;
    this.nameModule.emit(module.module);
  }
}
