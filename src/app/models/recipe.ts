export class Ingredient {
  public static create(data: any): Ingredient {
    return new Ingredient(
      data.id,
      data.description,
      data.rank
    );
  }

  constructor(
    public id: number,
    public description: string,
    public rank: number
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
