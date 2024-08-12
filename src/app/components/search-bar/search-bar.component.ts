import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchQuery = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getSearchValue(search: string) {
    this.searchQuery.emit(search);
  }
}
