import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { FootagesService } from 'src/app/services/footages.service';
import { FootageDetail } from 'src/app/shared/interfaces/footage-detail.interface';

@Component({
  selector: 'app-detail-footage',
  templateUrl: './detail-footage.component.html',
  styleUrls: ['./detail-footage.component.css']
})
export class DetailFootageComponent implements OnInit, OnDestroy {
  nasaId: string = "";
  
  footageDetail: FootageDetail = {
    "AVAIL:Center": "",
    "AVAIL:DateCreated": "",
    "AVAIL:Description": "",
    "AVAIL:Keywords": [],
    "AVAIL:MediaType": "",
    "AVAIL:NASAID": "",
    "AVAIL:Title": ""
  };

  sourceSrc: string | undefined = "";
  mediaType: string = "";
  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private footageService: FootagesService) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.nasaId = params["id"];
        return forkJoin({
          imageDetails: this.footageService.getFootageAssetsById(this.nasaId),
          footageDetails: this.footageService.getFootageDetail(this.nasaId)
        })
      }),
      takeUntil(this.destroy$)
    ).subscribe(({imageDetails, footageDetails}) => {
      this.footageDetail = footageDetails;
      this.mediaType = footageDetails['AVAIL:MediaType'];
      this.sourceSrc = imageDetails.collection.items.find((image) =>
        image.href.includes("~medium")
      )?.href;
    })
  }
}
