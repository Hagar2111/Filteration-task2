import { Component } from '@angular/core';
import { RecipesService } from '../Services/recipes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {

  allMeals:any[] =[];

  constructor(private _recipesService:RecipesService){

    _recipesService.getMeals().subscribe((data) => {

      this.allMeals = data.meals.slice(0,3);

    })
  }

}
