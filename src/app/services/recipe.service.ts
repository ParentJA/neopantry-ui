import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { RecipeForDetail, RecipeForList, RecipeReview } from '../models/recipe';

const BASE_URL: string = '/api/v1'

@Injectable()
export class RecipeService {
  constructor(private client: HttpClient) {}

  public getRecipes(query: string = null): Observable<RecipeForList[]> {
    let params: HttpParams = new HttpParams();
    if (query) {
      params = params.set('query', query);
    }
    return this.client.get(`${BASE_URL}/recipes/`, {params}).pipe(
      map((recipes: any[]) => {
        return recipes.map(recipe => RecipeForList.create(recipe));
      })
    );
  }

  public getRecipe(id: number): Observable<RecipeForDetail> {
    return this.client.get(`${BASE_URL}/recipes/${id}/`).pipe(
      map((recipe: any) => {
        return RecipeForDetail.create(recipe);
      })
    );
  }

  public getRecipeReviews(recipe: number = null, user: number = null): Observable<RecipeReview[]> {
    let params: HttpParams = new HttpParams();
    if (recipe) {
      params = params.set('recipe', recipe.toString());
    }
    if (user) {
      params = params.set('user', user.toString());
    }
    return this.client.get(`${BASE_URL}/recipes/reviews/`, {params}).pipe(
      map((recipeReviews: any[]) => {
        return recipeReviews.map(recipeReview => RecipeReview.create(recipeReview));
      })
    );
  }
}
