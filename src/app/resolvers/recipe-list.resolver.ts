import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { RecipeForList, RecipeService } from '../services/recipe.service';

@Injectable()
export class RecipeListResolver implements Resolve<RecipeForList[]> {
  constructor(private recipeService: RecipeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeForList[]> {
    return this.recipeService.getRecipes();
  }
}
