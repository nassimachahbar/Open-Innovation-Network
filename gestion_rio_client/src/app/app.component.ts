import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHideSideBar: boolean = false ;
  title = 'rio1';
  onshowsidebarchange(showHideSideBar){
    this.showHideSideBar = this.showHideSideBar ;
  }
}
