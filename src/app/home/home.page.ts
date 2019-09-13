import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url = 'https://pokeapi.co/api/v2/pokemon?limit=1000'; // download all 964!
  list;
  filteredList;

  constructor(private http: HttpClient, private router: Router) {
    http.get<any>(this.url)
      .pipe(take(1))
      .subscribe(pokeData => {
        this.list = pokeData.results;
        this.list.sort((a, b) => a.name > b.name ? 1 : -1);
        this.filteredList = [...this.list];
      });
  }

  showDetails(pokename) {
    this.router.navigateByUrl(pokename);
  }

  filterItems(evt) {
    const searchTerm = evt.srcElement.value;
    this.filteredList = searchTerm.trim() ? this.list.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    }) : [...this.list];
  }

}
