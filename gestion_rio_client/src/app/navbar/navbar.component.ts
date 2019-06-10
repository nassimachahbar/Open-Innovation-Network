import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  Sidebar : boolean ;

  @Output()
  showsidebarchange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  showSideBar(){
    this.Sidebar = !this.Sidebar ;
    this.showsidebarchange.emit(this.sidebar);
  }

}
