import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TypeaheadModule } from 'ngx-bootstrap';

import { RecipeService } from './services/recipe.service';
import { RecipeListResolver } from './resolvers/recipe-list.resolver';
import { RecipeDetailResolver } from './resolvers/recipe-detail.resolver';
import { AppComponent } from './components/app/app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { ROUTES } from './app.routes';
import { RecipeReviewResolver } from './resolvers/recipe-review.resolver';
import { RecipeReviewComponent } from './components/recipe-review/recipe-review.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeReviewComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken'
    }),
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    TypeaheadModule.forRoot()
  ],
  providers: [
    AuthService,
    RecipeService,
    RecipeListResolver,
    RecipeDetailResolver,
    RecipeReviewResolver
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
