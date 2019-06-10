import { Component, OnInit } from '@angular/core';
import {PointFocalMockService} from './pointfocal.mock.service';
import {Pointfocal} from '../shared/pointfocal';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-pointfocal',
  templateUrl: './pointfocal.component.html',
  styleUrls: ['./pointfocal.component.css']
})
export class PointfocalComponent implements OnInit {
  pointfocaux : Pointfocal[];
  pointfocalForm : FormGroup;
  constructor(private pointfocalService:PointFocalMockService,private fb:FormBuilder) {
  this.pointfocalForm = this.fb.group({
    id_point_focal : ['',Validators.required],
    nom_etablissement:'',
    budget_octroye : '',
    budget_total:''
  })
 }

  ngOnInit() {
    this.pointfocaux = this.pointfocalService.getPointsfocaux();
  }

}
