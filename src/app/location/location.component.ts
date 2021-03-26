import { Component, OnInit } from '@angular/core';
import {LocationService} from '../Service/location.service';
import {LocationModel} from '../model/LocationModel';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  private locationService: LocationService;
  private locationModel: LocationModel = {id: 1, address: 'Mora Ferenc', cityName: 'Szeged'};

  constructor(locationService: LocationService) {
    this.locationService = locationService;
  }

  ngOnInit(): void {
  }

  public createLocation(): void {
    this.locationService.createLocation(this.locationModel).subscribe();
  }

  public getAllLocation(): void {
    this.locationService.getAllLocation()
      .subscribe((locations: any) => {
        console.log(locations);
      });
  }

  public getLocation(id: number): void{
    this.locationService.getLocation(id).subscribe((location: any) =>
      console.log(location));
  }

  public updateLocation(): void {
    this.locationService.updateLocation(this.locationModel)
      .subscribe((location: any) => {
        console.log(location);
      });
  }

  public deleteLocation(id: number): void {
    this.locationService.deleteLocation(id).subscribe();
  }

}
