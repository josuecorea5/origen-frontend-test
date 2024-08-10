import { Component, OnInit } from '@angular/core';
import { FootagesService } from 'src/app/services/footages.service';
import { FootageResponse } from 'src/app/shared/interfaces/footage-response.interface';

@Component({
  selector: 'app-list-footage',
  templateUrl: './list-footage.component.html',
  styleUrls: ['./list-footage.component.css']
})
export class ListFootageComponent implements OnInit {
  popularFootages!: FootageResponse;
  recentFootages!: FootageResponse;
  isPopularFootages = true;

  constructor(private footageService: FootagesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  showPopularFootages() {
    this.isPopularFootages = true;
  }

  showRecentFootages() {
    this.isPopularFootages = false;
  }

  private loadData() {
    this.footageService.getPopularFootages()
      .subscribe(result => {
        console.log(result);
        this.popularFootages = result;
      })

    this.footageService.getRecentFootages()
      .subscribe(result => {
        console.log(result);
        this.recentFootages = result;
      })
  }
}
