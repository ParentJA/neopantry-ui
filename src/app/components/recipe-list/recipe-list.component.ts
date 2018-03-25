import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeForList, RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  public query: string;
  public recipes: RecipeForList[];
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.data.subscribe((data: {recipes: RecipeForList[]}) => this.recipes = data.recipes);
  }
  public search(): void {
    this.recipeService.getRecipes(this.query).subscribe((recipes: RecipeForList[]) => this.recipes = recipes);
  }
}
