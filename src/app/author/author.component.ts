import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {AuthorDetail, DocAboutAuthor} from "../data/model";


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  searchValue: string = '';
  authors: DocAboutAuthor[] = [];
  currentPage: number = 1;
  selectedAuthor!: AuthorDetail;


  // isVisible = false;

  ngOnInit() {
    const sBox = document.getElementById('searchBox'); // Thay 'searchBox' bằng ID thật của ô tìm kiếm
    if (sBox) {
      const searchInput$ = fromEvent(sBox, 'keyup').pipe(
        map((event: any) => event.target.value),
        debounceTime(1000), // Thời gian chờ sau khi gõ phím cuối cùng (1000ms = 1 giây)
        distinctUntilChanged()
      );

      searchInput$.subscribe(() => {
        // Gọi hàm tìm kiếm nhà văn với tham số searchTerm
        this.searchAuthors();
      });
    }
    // const sPage=document.getElementById("page");
    // if (sPage){
    //   const searchInput$ = fromEvent(sPage, 'keyup').pipe(
    //     map((event: any) => event.target.value),
    //     debounceTime(1000), // Thời gian chờ sau khi gõ phím cuối cùng (1000ms = 1 giây)
    //     distinctUntilChanged()
    //   );
    //
    //   searchInput$.subscribe(() => {
    //     // Gọi hàm tìm kiếm nhà văn với tham số searchTerm
    //     this.goToPage();
    //   });
    // }
  }

  constructor(private http: HttpClient) {
  }

  searchAuthors() {
    this.currentPage = 1;
    this.loadAuthors();
  }

  loadAuthors() {
    this.showSpinner();
    const offset = (this.currentPage - 1) * 10;
    const url = `https://openlibrary.org/search/authors.json?q=${this.searchValue}&limit=10&offset=${offset}`;
    this.http.get(url).subscribe((data: any) => {
      this.authors = data.docs;
    });
    setTimeout(() => {
      this.hideSpinner();
    }, 1000);

  }

  nextPage() {
    this.currentPage++;
    this.loadAuthors();
  }

  prevPage() {
    this.currentPage--;
    this.loadAuthors();
  }

  goToPage() {
    let inputPage = (<HTMLInputElement>document.getElementById("page")).value;


    if (Number(inputPage) > 0 && Number.isInteger(Number(inputPage))) {
      this.currentPage = Number(inputPage);
    } else {
      alert("Số trang không hợp lệ");
    }
    this.loadAuthors();
  }

  openAuthorDetails(key: string) {
    this.showSpinner();
    const url = `https://openlibrary.org/authors/${key}.json`;
    this.http.get(url).subscribe((data: any) => {
      this.selectedAuthor = data;
    });
    setTimeout(() => {
      this.hideSpinner();
    }, 1000);
    // this.showModal();

  }

  //SPINNER


  showSpinner() {
    let spinnerOverlay = document.getElementById("spinner-overlay");
    if (spinnerOverlay)
      spinnerOverlay.style.display = "flex";
  }

  hideSpinner() {
    let spinnerOverlay = document.getElementById("spinner-overlay");
    if (spinnerOverlay)
      spinnerOverlay.style.display = "none";
  }

}



