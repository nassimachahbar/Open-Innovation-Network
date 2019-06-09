import { Component, OnInit } from '@angular/core';
import {PointFOcalMockService} from './pointfocal.mock.service';
import {Pointfocal} from '../shared/pointfocal';

@Component({
  selector: 'app-pointfocal',
  templateUrl: './pointfocal.component.html',
  styleUrls: ['./pointfocal.component.css']
})
export class PointfocalComponent implements OnInit {
  pointfocaux : Pointfocal[];
  constructor(private pointfocalService:PointFocalMockService) { }

  ngOnInit() {
    this.pointfocaux = this.pointfocalService.getPointsfocaux();
  }

}
