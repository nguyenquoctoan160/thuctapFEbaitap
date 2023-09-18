import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {WorksEntry} from "../data/model";

@Component({
  selector: 'app-author-works',
  templateUrl: './author-works.component.html',
  styleUrls: ['./author-works.component.css']
})
export class AuthorWorksComponent implements OnInit {
  works: WorksEntry[] = [];
  authorKey: string = '';
  currentPage: number = 1;
  //limit: number = 10;
  size: number = 0;
  authorName: string = '';
  detailWork!: WorksEntry;

  //offset: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.authorKey = params.get('authorKey')!;
      this.http.get(`https://openlibrary.org/authors/${this.authorKey}.json`).subscribe((data: any) => {
        this.authorName = data.name;
      })
      this.loadWorks();
    });


  }

  loadWorks() {
    this.showSpinner();
    const offset = (this.currentPage - 1) * 10;
    const apiUrl = `https://openlibrary.org/authors/${this.authorKey}/works.json?limit=10&offset=${offset}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.works = data.entries;
      this.size = data.size;
    });
    setTimeout(() => {
      this.hideSpinner();
    }, 1000);

  }

  openWorkDetails(work: any) {
    this.showSpinner();
    this.detailWork = work;
    this.hideSpinner();
  }

  goBack() {
    history.back()
  }

  nextPage() {
    this.currentPage++;
    this.loadWorks();
  }

  prevPage() {
    this.currentPage--;
    this.loadWorks();
  }
  goToPage(){
    let inputPage = (<HTMLInputElement>document.getElementById("page")).value;


    if (Number(inputPage) > 0 && Number.isInteger(Number(inputPage))) {
      this.currentPage = Number(inputPage);
    } else {
      alert("Số trang không hợp lệ");
    }
    this.loadWorks();
  }
  showSpinner() {
    let spinnerOverlay = document.getElementById("spinner-overlay");
    if(spinnerOverlay)
      spinnerOverlay.style.display = "flex";
  }

  hideSpinner() {
    let spinnerOverlay = document.getElementById("spinner-overlay");
    if(spinnerOverlay)
      spinnerOverlay.style.display = "none";
  }
}
