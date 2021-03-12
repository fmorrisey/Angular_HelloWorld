import { Component } from '@angular/core';

@Component({
  selector: 'ngdirective',
  templateUrl: './ngdirective.component.html',
  styleUrls: ['./ngdirective.component.css'],
})
export class NgdirectiveComponent {
  viewMode = 'map';
  courses = [
    { id: 1, name: 'Biology' },
    { id: 2, name: 'Chemistry' },
    { id: 3, name: 'History' },
  ];
  constructor() {}
}
