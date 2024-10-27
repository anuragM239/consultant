import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { OperationsService } from '../../services/operations.service';

@Component({
  selector: 'app-view-clients',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view-clients.component.html',
  styleUrl: './view-clients.component.css'
})
export class ViewClientsComponent {
  restData: OperationsService;

  constructor(restDataref: OperationsService)
  {
    this.restData=restDataref;
  }

  ngOnInit() {
    this.restData.getClients();
  }
}
