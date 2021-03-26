import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  item: Item;
  @Input('item') set setItem(item: Item) {
    this.item = item;
  }

  constructor() {
    this.item = {
      title: 'Title',
      description: 'description',
      color: 'blue'
    }
  }
}
