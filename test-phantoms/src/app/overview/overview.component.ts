import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../services/seeds.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private service: BookmarksService) { }

  all = [];
  selectedBook = null;

  onFormSubmitted(isAdded) {
    console.log('isAdded', isAdded);
  }

  onBookSelected(book) {
      this.selectedBook = book
  }

  bookmarksIndex() {
      this.all = this.service.getBookmarks();
      console.log(this.all);
  }

  ngOnInit(): void {
      this.bookmarksIndex();
  }

}
