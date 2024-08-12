import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FootagesService } from 'src/app/services/footages.service';
import { FootageResponse } from 'src/app/shared/interfaces/footage-response.interface';

@Component({
  selector: 'app-list-footage',
  templateUrl: './list-footage.component.html',
  styleUrls: ['./list-footage.component.css']
})
export class ListFootageComponent implements OnInit, OnDestroy {
  popularFootages!: FootageResponse;
  recentFootages!: FootageResponse;
  searchFootages!: FootageResponse;
  isPopularFootages = true;
  isRecentFootages = false;
  private destroy$ = new Subject<void>();

  constructor(private footageService: FootagesService) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.loadData();
  }

  showPopularFootages() {
    this.isRecentFootages = false;
    this.isPopularFootages = true;
  }

  showRecentFootages() {
    this.isPopularFootages = false;
    this.isRecentFootages = true;
  }

  searchFootage(search: string) {
    this.footageService.searchFootage(search)
    .pipe(takeUntil(this.destroy$))
    .subscribe(result => {
      this.isPopularFootages = false;
      this.isRecentFootages = false;
      this.searchFootages = result;
    })
  }

  private loadData() {
    this.footageService.getPopularFootages()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.popularFootages = result;
      })

    this.footageService.getRecentFootages()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.recentFootages = result;
      })
  }
}
