import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  animations: [ slideInAnimation ]
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAnimationData( outlet: RouterOutlet ){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
