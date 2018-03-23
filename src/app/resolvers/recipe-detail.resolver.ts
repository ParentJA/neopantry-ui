import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { RecipeForDetail } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Injectable()
export class RecipeDetailResolver implements Resolve<RecipeForDetail> {
  constructor(private recipeService: RecipeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeForDetail> {
    return this.recipeService.getRecipe(route.params.id);
  }
}
