import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchText!: string;
  @Output() searchTextChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  change(newText: string) {
    this.searchText = newText;
    this.searchTextChange.emit(newText);
  }

}
