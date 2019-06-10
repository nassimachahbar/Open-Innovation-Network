import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URLS} from '../config/api.url.config';
import {PointFocalMockService} from '../pointfocal/pointfocal.mock.service'

@Injectable()

export class PointfocalService{
  constructor(private http:HttpClient){
  }
    getPointsfocaux() : Observable<any> {
      return this.http.get(API_URLS.POINTFOCAUX_URLS);
    }
  }
