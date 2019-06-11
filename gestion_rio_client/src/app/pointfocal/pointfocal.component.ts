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
  operation : string = 'Ajouter';
  selectedPointfocal : Pointfocal ;
  constructor(private pointfocalService:PointfocalService,private fb:FormBuilder) {
    this.createForm();
 }

  ngOnInit() {
    this.initPointfocal();
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
        this.initPointfocal();
        this.loadPointsfocaux();
      }
    );
  }

  updatePointfocal(){
    this.pointfocalService.updatePointfocal(this.selectedPointfocal).subscribe(
      res => {
        this.initPointfocal();
        this.loadPointsfocaux();
      }
    );
  }

  initPointfocal(){
    this.selectedPointfocal = new Pointfocal(null,null,null,null) ;
  }

  createForm(){
    this.pointfocalForm = this.fb.group({
      id_point_focal : ['',Validators.required],
      nom_etablissement:'',
      budget_octroye : '',
      budget_total:''
    });
  }

  deletePointfocal(){
    this.pointfocalService.deletePointfocal(this.selectedPointfocal.id_point_focal).subscribe(
      res => {
        this.selectedPointfocal = new Pointfocal(null,null,null,null);
        this.loadPointsfocaux();
      }
    );
  }

}
