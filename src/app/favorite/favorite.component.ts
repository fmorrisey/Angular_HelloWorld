import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input('isFavorite') public isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() {
    this.isFavorite = false;
  }

  clickStar() {
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}
