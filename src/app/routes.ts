import { Routes } from '@angular/router';

import { RecipeListResolver } from './resolvers/recipe-list.service';
import { RecipeDetailResolver } from './resolvers/recipe-detail.service';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
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
  }
];
