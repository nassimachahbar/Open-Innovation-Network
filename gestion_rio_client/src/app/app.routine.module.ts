import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {PointfocalComponent} from './pointfocal/pointfocal.component';
import {VisualisationComponent} from './visualisation/visualisation.component';

export const appRoutes : Routes = [
  {path:'pointfocal',component : PointfocalComponent},
  {path: 'visualisation',component :VisualisationComponent},
  {path:'' ,redirectTo : '/visualisation',pathMatch: 'full'}
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
