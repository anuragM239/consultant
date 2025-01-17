import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../services/operations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgFor],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  restData: OperationsService;

  constructor(restDataref: OperationsService, private router:Router)
  {
    this.restData=restDataref;
  }

  ngOnInit() {
    //const consultantId = this.router.snapshot.params['id'];
    this.restData.getConsultantById();
  }

}
