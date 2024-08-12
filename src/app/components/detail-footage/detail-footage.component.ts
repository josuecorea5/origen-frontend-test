import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FootagesService } from 'src/app/services/footages.service';
import { FootageDetail } from 'src/app/shared/interfaces/footage-detail.interface';

@Component({
  selector: 'app-detail-footage',
  templateUrl: './detail-footage.component.html',
  styleUrls: ['./detail-footage.component.css']
})
export class DetailFootageComponent implements OnInit {
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

  constructor(private route: ActivatedRoute, private footageService: FootagesService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.nasaId = params["id"];
        return forkJoin({
          imageDetails: this.footageService.getFootageAssetsById(this.nasaId),
          footageDetails: this.footageService.getFootageDetail(this.nasaId)
        })
      })
    ).subscribe(({imageDetails, footageDetails}) => {
      console.log(imageDetails, footageDetails)
      this.footageDetail = footageDetails;
      this.mediaType = footageDetails['AVAIL:MediaType'];
      this.sourceSrc = imageDetails.collection.items.find((image) =>
        image.href.includes("~medium")
      )?.href;
    })
  }
}
