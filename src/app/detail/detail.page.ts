import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  url = 'https://pokeapi.co/api/v2/pokemon/'; // get everything about ONE pokemon
  pokename = '';
  pokeDetails = {};

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    // read parameter from web address
    this.pokename = this.route.snapshot.paramMap.get('pokename');
    this.http.get(this.url + this.pokename)
      .subscribe(pokeData => {
        this.pokeDetails = pokeData;
        console.log(pokeData);
      });
  }

}
