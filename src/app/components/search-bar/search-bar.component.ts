import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchQuery = new EventEmitter<string>();

  getSearchValue(search: HTMLInputElement) {
    const value = search.value;
    search.value = "";
    this.searchQuery.emit(value);
  }
}
