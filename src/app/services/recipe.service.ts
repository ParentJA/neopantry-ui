import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

export class Ingredient {
  public static create(data: any): Ingredient {
    return new Ingredient(
      data.id,
      data.description,
      data.rank,
      data.is_optional
    );
  }

  constructor(
    public id: number,
    public description: string,
    public rank: number,
    public isOptional: boolean
  ) {}
}

export class RecipeForDetail {
  public static create(data: any): RecipeForDetail {
    return new RecipeForDetail(
      data.id,
      data.name,
      data.description,
      data.ingredients.map((ingredient: any) => Ingredient.create(ingredient)),
      data.instructions,
      data.photo,
      data.average_make_again,
      data.average_rating,
      data.num_reviews
    );
  }

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public ingredients: Ingredient[],
    public instructions: string,
    public photo: string,
    public averageMakeAgain: number,
    public averageRating: number,
    public numReviews: number
  ) {}
}

export class RecipeForList {
  public static create(data: any): RecipeForList {
    return new RecipeForList(
      data.id,
      data.name,
      data.short_description,
      data.photo,
      data.average_make_again,
      data.average_rating,
      data.num_reviews
    );
  }

  constructor(
    public id: number,
    public name: string,
    public shortDescription: string,
    public photo: string,
    public averageMakeAgain: number,
    public averageRating: number,
    public numReviews: number
  ) {}
}

export class RecipeReview {
  public static create(data: any): RecipeReview {
    return new RecipeReview(
      data.id,
      data.recipe,
      data.recipe_name,
      data.user,
      data.user_username,
      data.make_again,
      data.rating,
      data.review
    );
  }

  constructor(
    public id: number,
    public recipe: number,
    public recipeName: string,
    public user: number,
    public userUsername: string,
    public makeAgain: boolean,
    public rating: number,
    public review: string
  ) {}
}

@Injectable()
export class RecipeService {
  private BASE_URL: string = '/api/v1';

  constructor(private client: HttpClient) {}

  public getRecipes(query: string = null): Observable<RecipeForList[]> {
    let params: HttpParams = new HttpParams();
    if (query) {
      params = params.set('query', query);
    }
    return this.client.get(`${this.BASE_URL}/recipes/`, {params}).pipe(
      map((recipes: any[]) => {
        return recipes.map(recipe => RecipeForList.create(recipe));
      })
    );
  }

  public getRecipe(id: number): Observable<RecipeForDetail> {
    return this.client.get(`${this.BASE_URL}/recipes/${id}/`).pipe(
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
    return this.client.get(`${this.BASE_URL}/recipes/reviews/`, {params}).pipe(
      map((recipeReviews: any[]) => {
        return recipeReviews.map(recipeReview => RecipeReview.create(recipeReview));
      })
    );
  }
}
