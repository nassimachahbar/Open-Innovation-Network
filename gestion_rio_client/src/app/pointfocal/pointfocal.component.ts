import { Component, OnInit } from '@angular/core';
import {PointfocalService} from './pointfocal.service';
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
  constructor(private pointfocalService:PointfocalService,private fb:FormBuilder) {
  this.pointfocalForm = this.fb.group({
    id_point_focal : ['',Validators.required],
    nom_etablissement:'',
    budget_octroye : '',
    budget_total:''
  })
 }

  ngOnInit() {
    this.loadPointsfocaux();
  }

  loadPointsfocaux(){
    this.pointfocalService.getPointsfocaux().subscribe(
      data => {this.pointfocaux = data},
      error => {console.log('an error has occured !')},
      () => {console.log('Loading focal points was successful !')}
    );
  }

  addPointfocal(){
    const pf = this.pointfocalForm.value;
    this.pointfocalService.addPointfocal(pf).subscribe(
      res => {
        this.loadPointsfocaux();
      }
    );
  }

}
