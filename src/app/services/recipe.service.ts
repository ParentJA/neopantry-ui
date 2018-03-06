import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Recipe } from '../models/recipe';

const BASE_URL: string = 'http://localhost:8000/api/v1'

@Injectable()
export class RecipeService {
  constructor(private client: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.client.get(`${BASE_URL}/recipes/`).pipe(
      map((recipes: any[]) => {
        return recipes.map(recipe => new Recipe(
          recipe.id,
          recipe.name
        ));
      })
    );
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.client.get(`${BASE_URL}/recipes/${id}/`).pipe(
      map((recipe: any) => {
        return new Recipe(
          recipe.id,
          recipe.name
        );
      })
    );
  }
}
