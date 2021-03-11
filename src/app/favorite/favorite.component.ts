import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FavoriteComponent {
  @Input('isFavorite') public isFavorite: boolean;
  @Output('change') click = new EventEmitter();

  constructor() {
    this.isFavorite = false;
  }

  clickStar() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite });
  }
}
export interface FavoriteChangedEventArgs {
  eventState: boolean;
}
