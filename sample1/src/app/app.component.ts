import { Component } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample1';
  items: Item[] = [{
    title: 'Title 1',
    description: 'Title one description',
    color: 'green'
  }, {
    title: 'Title 2',
    description: 'Title two description',
    color: 'blue'
  }, {
    title: 'Title 3',
    description: 'Title three description',
    color: 'red'
  }];
}

