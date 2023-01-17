import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child2parentcomp';

  itemList: string[] = [];

  onAddedItem(item: string) {
    this.itemList.push(item);
  }
}
