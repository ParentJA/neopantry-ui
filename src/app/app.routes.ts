import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipeListResolver } from './resolvers/recipe-list.resolver';
import { RecipeDetailResolver } from './resolvers/recipe-detail.resolver';
import { RecipeReviewResolver } from './resolvers/recipe-review.resolver';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeReviewComponent } from './components/recipe-review/recipe-review.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';

export const ROUTES: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
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
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
