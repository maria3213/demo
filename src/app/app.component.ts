import { Component } from '@angular/core';
import { FetchDataService } from './fetchData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  data: any;
  constructor(private fetchDataService: FetchDataService) {}
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.fetchDataService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
