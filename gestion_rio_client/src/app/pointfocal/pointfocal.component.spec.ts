import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointfocalComponent } from './pointfocal.component';

describe('PointfocalComponent', () => {
  let component: PointfocalComponent;
  let fixture: ComponentFixture<PointfocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointfocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointfocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
