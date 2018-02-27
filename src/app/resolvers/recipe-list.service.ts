import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Injectable()
export class RecipeListResolver implements Resolve<Recipe[]> {
  constructor(private recipeService: RecipeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> {
    return this.recipeService.getRecipes();
  }
}
