import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  title ="google-maps"
  private map: google.maps.Map | undefined


  constructor() { }

  ngOnInit(): void {
  
    let loader = new Loader({
      apiKey: 'AIzaSyBqvAk979UKy23lGjkXnkN8Q3EOWHyFmvE'

    });

    loader.load().then(() => {
     console.log("loaded map")

     const location = {
      lat: 17.3850,
      lng: 78.4867
     };

    this.map = new google.maps.Map(document.getElementById('map')!, {
      center: location,
      zoom: 6
    })

    // marker

    const marker = new google.maps.Marker({
      position:location,
      map:this.map

    })


    })

  }
 
}
