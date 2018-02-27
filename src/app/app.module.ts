import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RecipeService } from './recipe.service';
import { RecipeListResolver } from './resolvers/recipe-list.service';
import { RecipeDetailResolver } from './resolvers/recipe-detail.service';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RecipeService,
    RecipeListResolver,
    RecipeDetailResolver
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
