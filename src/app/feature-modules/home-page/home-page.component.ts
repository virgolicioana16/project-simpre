import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }

  navigateToCocktails(){
    this.router.navigate(['/cocktails']);
  }

  navigateToMeals(){
    this.router.navigate(['/meals'])
  }


}
