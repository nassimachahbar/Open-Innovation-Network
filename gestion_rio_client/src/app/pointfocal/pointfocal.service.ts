import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URLS} from '../config/api.url.config';

import {Pointfocal} from '../shared/pointfocal';

@Injectable()

export class PointfocalService{
  constructor(private http:HttpClient){
  }
    getPointsfocaux() : Observable<any> {
      return this.http.get(API_URLS.POINTFOCAUX_URLS);
    }

    addPointfocal(pointfocal:Pointfocal) : Observable<any> {
      return this.http.post(API_URLS.POINTFOCAUX_URLS,pointfocal);
    }

    updatePointfocal(pointfocal:Pointfocal) : Observable<any>{
      return this.http.put(API_URLS.POINTFOCAUX_URLS,pointfocal);
    }

    deletePointfocal(id_point_focal:number):Observable<any>{
      return this.http.delete(API_URLS.POINTFOCAUX_URLS + '/${id_point_focal}');
    }
  }
