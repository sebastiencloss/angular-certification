import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  @Input() zipCode: string = null;
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    if (this.zipCode) {

    }
  }

  /**
   * Delete the item
   */
  public deleteItem(): void {
    this.deleted.emit(this.zipCode);
  }
}
