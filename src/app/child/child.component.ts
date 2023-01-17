import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output("itemNameFromChild") itemNameEmitter: EventEmitter<string> = new EventEmitter<string>();

  itemName = '';

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.itemNameEmitter.emit(this.itemName);
    this.itemName = '';
  }
}
