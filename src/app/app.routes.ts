import { Routes } from '@angular/router';

import { RecipeListResolver } from './resolvers/recipe-list.resolver';
import { RecipeDetailResolver } from './resolvers/recipe-detail.resolver';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

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
