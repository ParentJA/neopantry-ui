import { Routes } from '@angular/router';

import { RecipeListResolver } from './resolvers/recipe-list.resolver';
import { RecipeDetailResolver } from './resolvers/recipe-detail.resolver';
import { RecipeReviewResolver } from './resolvers/recipe-review.resolver';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeReviewComponent } from './components/recipe-review/recipe-review.component';

export const ROUTES: Routes = [
  {
    path: 'recipe',
    component: RecipeComponent,
    children: [
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: {
          recipe: RecipeDetailResolver
        }
      },
      {
        path: ':id/review',
        component: RecipeReviewComponent,
        resolve: {
          recipeReviews: RecipeReviewResolver
        }
      },
      {
        path: '',
        component: RecipeListComponent,
        resolve: {
          recipes: RecipeListResolver
        }
      }
    ]
  },
  { path: '', redirectTo: 'recipe', pathMatch: 'full' }
];
