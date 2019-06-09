IMPORT {Injectable} from '@angular/core';
import {Pointfocal} from '../shared/pointfocal';

@Injectable
export PointFocalMockService{
  const POINTSFOCAUX: Pointfocal[] = [];
  constructor(){
    let pf1:Pointfocal = new Pointfocal(1,'ENSIAS',20.32,1365.25);
    let pf2:Pointfocal = new Pointfocal(1,'ENSET',11.25,1365.25);
    let pf3:Pointfocal = new Pointfocal(1,'EMI',53.26,1365.25);
    this.POINTSFOCAUX.push(pf1);
    this.POINTSFOCAUX.push(pf2);
    this.POINTSFOCAUX.push(pf3);
  }

    public getPointsfocaux(): Pointfocal[] {
      return this.POINTSFOCAUX ;
    }
  }
