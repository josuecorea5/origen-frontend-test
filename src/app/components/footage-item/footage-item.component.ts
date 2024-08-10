import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footage-item',
  templateUrl: './footage-item.component.html',
  styleUrls: ['./footage-item.component.css']
})
export class FootageItemComponent implements OnInit {
  @Input() imgFootage = "";
  @Input() mediaType = "";
  constructor() { }

  ngOnInit(): void {
  }

}
