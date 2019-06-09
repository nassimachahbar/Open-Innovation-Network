import {Injectable} from '@angular/core';
import {Pointfocal} from '../shared/pointfocal';

@Injectable()
export class PointFocalMockService{
  private POINTSFOCAUX: Pointfocal[] = [];
  constructor(){
    let pf1:Pointfocal = new Pointfocal(1,'ENSIAS',20,1365);
    let pf2:Pointfocal = new Pointfocal(2,'ENSET',11,1365);
    let pf3:Pointfocal = new Pointfocal(3,'EMI',53,1365);
    this.POINTSFOCAUX.push(pf1);
    this.POINTSFOCAUX.push(pf2);
    this.POINTSFOCAUX.push(pf3);
  }

    public getPointsfocaux(): Pointfocal[] {
      return this.POINTSFOCAUX ;
    }
  }
