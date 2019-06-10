import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {PointfocalComponent} from './pointfocal/pointfocal.component';
import {VisualisationComponent} from './visualisation/visualisation.component';

export const appRoutes : Routes = [
  {path:'pointfocal',component : PointfocalComponent},
  {path: 'visualisation',component :VisualisationComponent}
];
@NgModule({
  imports :[
    RouterModule.forRoot(
      appRoutes,{enableTracing:true}
    )
  ],
  exports : [RouterModule]


})

export class AppRoutingModule{}
