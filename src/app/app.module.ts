import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RecipeService } from './services/recipe.service';
import { RecipeListResolver } from './resolvers/recipe-list.resolver';
import { RecipeDetailResolver } from './resolvers/recipe-detail.resolver';
import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { ROUTES } from './app.routes';

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
    RouterModule.forRoot(ROUTES, { useHash: true })
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
