import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footage-item',
  templateUrl: './footage-item.component.html',
  styleUrls: ['./footage-item.component.css']
})
export class FootageItemComponent {
  @Input() imgFootage = "";
  @Input() mediaType = "";
}
