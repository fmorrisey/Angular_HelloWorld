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
    <div>
      <input type="text" [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    </div>
    <div>here: {{ text | summary: 100 }}</div>
  `,
})
export class CoursesComponent {
  isActive = false;
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  email = 'test';

  public text: string =
    'Voluptate dolore quis quis velit do. Velit sunt amet aute sunt ad. Ea non mollit cillum sint minim dolor. Mollit non consectetur esse excepteur ipsum consectetur voluptate eu mollit quis. Voluptate dolore quis quis velit do. Velit sunt amet aute sunt ad. Ea non mollit cillum sint minim dolor. Mollit non consectetur esse excepteur ipsum consectetur voluptate eu mollit quis. Voluptate dolore quis quis velit do. Velit sunt amet aute sunt ad. Ea non mollit cillum sint minim dolor. Mollit non consectetur esse excepteur ipsum consectetur voluptate eu mollit quis. Voluptate dolore quis quis velit do. Velit sunt amet aute sunt ad. Ea non mollit cillum sint minim dolor. Mollit non consectetur esse excepteur ipsum consectetur voluptate eu mollit quis. Voluptate dolore quis quis velit do. Velit sunt amet aute sunt ad. Ea non mollit cillum sint minim dolor. Mollit non consectetur esse excepteur ipsum consectetur voluptate eu mollit quis. Voluptate dolore quis quis velit do. Velit sunt amet aute sunt ad. Ea non mollit cillum sint minim dolor. Mollit non consectetur esse excepteur ipsum consectetur voluptate eu mollit quis.';

  onKeyUp() {
    console.log(this.email);
  }

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
