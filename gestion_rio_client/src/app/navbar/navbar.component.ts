import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  Showsidebar : boolean ;

  @Output()
  showsidebarchange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  afficherSidebar(){
    this.Showsidebar =  !this.Showsidebar;
    this.showsidebarchange.emit(this.Showsidebar);
  }

}
