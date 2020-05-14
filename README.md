# ProjectSimpre
# Proiect Cloud Computing
### Introducere
Aceasta aplicatie are scopul de a imbunatati timpul petrecut in carantina. Activitatile uzuale, cum ar fi prepararea unui fel de mancare sau a unei bauturi, pot deveni momente placute si inedited, in care putem invata lucruri noi.
## Descriere problema
In aceasta perioada de izolare , datorata pandemiei cu coronavirus, m-am gandit sa fac o aplicatie web care sa ajute la destinderea atmosferii. De ce sa vedem pregatirea meselor ca o sarcina, in loc sa incercam sa descoperim retete noi prin care sa pregatim preparate noi?  O problema destul de des intalnita este, pe de o parte, lipsa unor retete disponibile online, iar pe de alta parte felul in care pot folosi produsele de care dispun la prepararea unor retete.  
Langa o masa buna merge si un cocktail apetisant. Astfel, m-am gandit sa integrez o parte de coktailuri pentru a transforma un pranz sau o cina intr-o experienta relaxanta, timp in care putem si socializa online. M-am gandit ca aplicatia poate fi trimisa si prietenilor, iar prin intermediul mijloacelor de comunicare de care dispunem acum (Zoom, Skype etc.) astfel incat fiecare poate folosi componenta de search pentru a alege cocktailul dupa preferinte sau ingrediente, iar apoi sa isi puna creativitatea la bataie prin prepararea lui. 
Aplicatia incepe cu o pagina de Home:
![home](https://user-images.githubusercontent.com/65356924/81956225-bb59f000-9613-11ea-8646-1753f7a16663.png)
Aceasta are linkuri pentru cele doua module importante ale aplicatiei: Discover Meals (retete si informatii despre mancaruri) si Discover Cocktails (bauturi).
Daca dam clic pe oricare imagine, se deschide un ecran care ofera interactivitate. In acest ecran, exista mai multe zone: a) zona navbar (bara de navigatie), care permite comutarea pe sectiunea Cocktails (respective Meals) sau intoarcerea in ecranul initial (Improve your quarantine experience); b) zona de introducere a unui cuvant cheie, pe baza caruia de face cautarea (Discover your favourite meal, respective Discover your favorite cocktail, dac asunteti spe seciune Cocktails); c) zona de afisare a rezultatelor gasite, daca exista informatii in aplicatie care sa contina cuvantul cheie introdus (este zona alba, de sub linia orizontala lunga). 
![mealscreen](https://user-images.githubusercontent.com/65356924/81956424-f4926000-9613-11ea-90c0-c0d2128740a1.png)
Daca utilizatorul introduce un cuvant de cautare si apasa Enter, ecranul ar putrea arata ca mai jos (cuvantul cheie fiind fish):
![fish](https://user-images.githubusercontent.com/65356924/81956640-39b69200-9614-11ea-88f9-c37144af8574.png)
Se observa ca zona de afisare e structurata pe 5 coloane, care contine informatii despre fiecare fel de mancare:  imaginea (Image), numele (Name), categoria (Category), zona de provenienta (Area) si instructiune de preparare (Instructions). 
In plus, daca dam clic pe imagine, apare o fereastra modala care sintetizeaza informatiile, sub forma textuala, despre felul de mancare selectat (numele, zona, ingredient):
![fishoverview](https://user-images.githubusercontent.com/65356924/81956827-74202f00-9614-11ea-9755-032b4baabacd.png)

## Prezentare API-uri utilizate
Pentru realizarea funcționalităților prezentate anterior, am utilizat 2 API-uri: TheCocktailDB (https://www.thecocktaildb.com/api.php) si TheMealDB (https://www.themealdb.com/api.php).
![thecocktaildb](https://user-images.githubusercontent.com/65356924/81957051-c1040580-9614-11ea-96b1-834f1474dbb5.png)
 TheCocktailDB API  oferă o bază de date universal cu băuturi și cocktail-uri din întreaga lume. Acest API permite cautarea in baza lor de cocktailuri dupa categorie, nume, ingredient etc. In aplicatie am folosit cautarea dupa un cuvant cheie din denumirea bauturii.
TheMealDB API ofera o bază de date open source de rețete din întreaga lume. API-ul permite cautarea felului de mancare dupa mai multe criterii (nume, o litera, ingredient, categorie etc.). In aplicatie cautam feluri de mancare pe baza unui cuvant cheie care se regaseste in nume. 
![Themealdb](https://user-images.githubusercontent.com/65356924/81957179-e7c23c00-9614-11ea-8fba-f6bb73115196.png)
## Flux de date
Aplicatia are 6 module principale:
*	home-page (pagina de start), care permite vizualizarea ecranului initial si ofera link catre alte doua module (cocktails, respectiv meals)
*	cocktails
*	meals
*	navbar (care creeaza bara de navigare, cu optiunile Improve your quarantine experience, Meals, Cocktails)
*	constants
*	services
La randul lor, cocktails (analog meals) are urmatoarele subcomponente:
* cocktails-overview-dialog, care gestioneaza fereastra modala cu informatii text despre cocktails. Codul specific e aratat mai jos:
```
<h1 mat-dialog-title>{{data.strDrink}} Overview</h1>
<div mat-dialog-content>
    <div class= 'row'>
        <p>Glass:</p>
        <input matInput value={{data.strGlass}} [disabled]=true>
    </div>
    <div class= 'row'>
        <p>Ingredients:</p>
        <input matInput value={{data.strIngredient1}}{{placeholder}}{{data.strMeasure1}} [disabled]=true>
        <input matInput value={{data.strIngredient2}}{{placeholder}}{{data.strMeasure2}} [disabled]=true>
        <input matInput value={{data.strIngredient3}}{{placeholder}}{{data.strMeasure3}} [disabled]=true>
        <input matInput *ngIf="data.strIngredient4" value={{data.strIngredient4}}{{placeholder}}{{data.strMeasure4}} [disabled]=true>
        <input matInput *ngIf="data.strIngredient5" value={{data.strIngredient5}}{{placeholder}}{{data.strMeasure5}} [disabled]=true>
    </div>
</div>

```
* cocktail-page, care permite cautarea in cazul in care in campul text a fost tastat macar un character
```
<app-navbar></app-navbar>
<app-search-bar (searchedValue)="getSearchedValue($event)"></app-search-bar>

<div class="row">
  <ng-container *ngIf="searchedValue">
    <app-search-result [cocktailName]="searchedValue"></app-search-result>
  </ng-container>

</div>
```
* search-bar, care gestioneaza zona de introducere text din partea utilizatorului
* model, care gestioneaza raspunsul API sub forma unui vector cu multiple componente
* search-result, care prelucreaza raspunsul API si descompune informatia sub forma celor 4 zone de afisare (imagine, nume, categorie, instructiuni)
```
<div class="mat-elevation-z8">
  <table mat-table [dataSource]="dataSource">

    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.strDrink}} </td>
      <mat-divider [vertical]="true"></mat-divider>
    </ng-container>

    <ng-container matColumnDef="category">
      <th mat-header-cell *matHeaderCellDef> Category </th>
      <td mat-cell *matCellDef="let element"> {{element.strCategory}} </td>
      <mat-divider [vertical]="true"></mat-divider>
    </ng-container>

    <ng-container matColumnDef="instructions">
      <th mat-header-cell *matHeaderCellDef> Instructions </th>
      <td mat-cell *matCellDef="let element"> {{element.strInstructions}} </td>
      <mat-divider [vertical]="true"></mat-divider>
    </ng-container>

    <ng-container matColumnDef="image">
      <th mat-header-cell *matHeaderCellDef> Image </th>
      <td mat-cell *matCellDef="let element"> <img [src]="element.strDrinkThumb" /> </td>
      <mat-divider [vertical]="true"></mat-divider>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="(openOverviewDialog(row))"></tr>
  </table>
</div> 
```

Metoda HTTP folosita este GET, care este implementata in modulul services (exemplul mai jos e doar pentru cocktails):
```
searchCocktailByName(name: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${backendUrl.cocktailService.searchCocktailByName}${name}`);
  }
 ```

Modulul constante arata astfel (constant.ts):
```
export const cocktailsApi = 'https://www.thecocktaildb.com/api/json/v1/1';
export const mealsApi ='https://www.themealdb.com/api/json/v1/1';

export const backendUrl = {
    cocktailService: {
        searchCocktailByName: `${cocktailsApi}/search.php?s=`,
        searchCocktailByIngredient: `${cocktailsApi}/filter.php?i=`,
        searchCocktailByFirstLetter: `${cocktailsApi}/search.php?f=`
    },
    mealsServie: {
        searchMealByName: `${mealsApi}/search.php?s=`,
        searchMealByIngredient: `${cocktailsApi}/filter.php?i=`,
        searchMealByFirstLetter: `${cocktailsApi}/search.php?f=`
    }
}
```
Partea de autentificare si autorizare nu a fost necesara.

## Referinte
* https://www.themealdb.com/api.php
* https://www.thecocktaildb.com/api.php

## Angular app
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
