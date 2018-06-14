import { Component, OnInit } from '@angular/core';

//Google Places Imports
import {environment} from '../environments/environment';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
export const googleAPIKey = environment.googleAPIKey;

interface PlaceData {
  description: string,
  lat: number,
  lng: number,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  lat: number = 51.678418;
  lng: number = 7.809007;

  //Google Places Variables
  placeService: any;
  placeDetailsService: any;
  placeServiceIsReady: true;
  selectedPlaces: PlaceData[] = [];
  searchBoxEntry: string;

  constructor(private mapsAPILoader: MapsAPILoader) {
    this.mapsAPILoader.load().then(() => {
      this.placeService = new google.maps.places.AutocompleteService();
      this.placeDetailsService = new google.maps.places.PlacesService(document.createElement('div'));
      this.placeServiceIsReady = true;
    });
  }

  //Hit places service everytime the search info box is typed in
  onKey(event: any) { // without type info
    if(event.target.value){
      this.getAutocompleteResults(String(event.target.value))
    }
  }


  //Get the Places results from google and then resolves the details (lat and lon) for each place
  public getAutocompleteResults(partialCity: string){
    if (this.placeServiceIsReady) {
      //Get predictions restricted to just Cities
      this.placeService.getPlacePredictions({input:partialCity, types: ["(cities)"]}, result => {
        if(result){
          this.selectedPlaces = [];
          //For each result, hit the details API to get lat and lon data
          for (let c=0;c<result.length;c++){
            let place = result[c];
              this.placeDetailsService.getDetails({placeId: place.place_id}, res => {
                if (res){
                let parse = JSON.parse(JSON.stringify(res))
                  var newPlace: PlaceData = {
                    description: place.description,
                    lat: parse.geometry.location.lat,
                    lng: parse.geometry.location.lng
                  }
                  this.selectedPlaces.push(newPlace);
                }
            });
            
          }
        }
      });
    }
  }

  ngOnInit(){
  }
}
