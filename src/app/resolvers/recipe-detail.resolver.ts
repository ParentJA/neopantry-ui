import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Injectable()
export class RecipeDetailResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> {
    return this.recipeService.getRecipe(route.params.id);
  }
}
