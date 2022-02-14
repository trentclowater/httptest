import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'httptest';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'https://test.apollo.bio:10443/assaya';

    const options = {
      headers: new HttpHeaders({
        contentType:  'application/json'
      })
    };

    const body = { action: 'registrate', token : '' };

    this.http.post<any>(url, body, options).subscribe({
      next: (success) => {
        console.log('SUCCESS: ', success);
      },
      error: (error) => {
        console.log('ERROR: ', error);
      }
    })
  }
}
