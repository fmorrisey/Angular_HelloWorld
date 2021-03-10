import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'courses',
  template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}<br />
        <img src="{{ imageUrl }}" />
      </li>
    </ul>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
    </div>
  `,
})
export class CoursesComponent {
  isActive = false;
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;

  onDivClicked() {
    window.alert('Div was Clicked');
  }

  onSave($event: any) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }

  constructor(service: CoursesService) {
    // Decouples the service
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
