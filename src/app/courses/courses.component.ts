import { Component, OnInit } from '@angular/core';
import {Course} from '../course';
import {COURSE} from './../mock-courses'
 @Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course: Course={
    id: 1,
    name: "Demo-Angular"
  }
  constructor() { }

  ngOnInit() {
  }

}

