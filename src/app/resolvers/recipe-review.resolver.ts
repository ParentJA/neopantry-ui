import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { RecipeReview, RecipeService } from '../services/recipe.service';

@Injectable()
export class RecipeReviewResolver implements Resolve<RecipeReview[]> {
  constructor(private recipeService: RecipeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeReview[]> {
    return this.recipeService.getRecipeReviews(route.params.id);
  }
}
