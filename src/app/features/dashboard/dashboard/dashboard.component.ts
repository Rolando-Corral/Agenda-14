import { Component, OnInit } from '@angular/core';
import { GenericButtonConfig } from 'src/app/shared/atoms/generic-button/interface/generic-button.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public buttonConfig: GenericButtonConfig = {
    label: 'Go to showroom',
    classMode: 'btn-unbordered primary',
    route: '/showroom'
  };

  public saveConfig: GenericButtonConfig = {
    label: 'Guardar',
    classMode: 'btn-success secondary',
    icon: 'bi-save',
    action: () => this.save(),
  };

  public editConfig: GenericButtonConfig = {
    label: 'Editar',
    classMode: 'btn-edit',
    icon: 'bi-pencil',
    action: () => this.edit(),
  };

  constructor() { }

  ngOnInit(): void {
  
  }

  save(): void {
    console.log('save');
  }

  edit(): void {
    console.log('edit');
  }

  

}
