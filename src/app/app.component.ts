import { Component, OnInit } from '@angular/core';
import { FootageResponse } from './shared/interfaces/footage-response.interface';
import { FootagesService } from './services/footages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  popularFootages!: FootageResponse;
  recentFootages!: FootageResponse;
  title = 'nasa-technical-test';

  constructor(private footageService: FootagesService) {}
  ngOnInit(): void {
    this.loadData();
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
