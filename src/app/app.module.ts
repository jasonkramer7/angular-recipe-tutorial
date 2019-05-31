import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from  './shared/loading-spinner/loading-spinner.component';

import { DropdownDirective } from "./shared/dropdown.directive";

import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { DataStorageService } from "./shared/data-storage.service";
import { RecipesResolverService }  from "./recipes/recipes-resolver.service";
import { AuthService } from "./auth/auth.service";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { AuthGuard } from "./auth/auth.guard";

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  declarations: [ 
   AppComponent,
   HelloComponent, 
   HeaderComponent, 
   RecipesComponent, 
   RecipeListComponent,
   RecipeDetailComponent,
   RecipeItemComponent,
   ShoppingListComponent,
   ShoppingEditComponent,
   RecipeStartComponent,
   RecipeEditComponent,
   AuthComponent,
   LoadingSpinnerComponent,
   DropdownDirective
   ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    DataStorageService, 
    RecipesResolverService, 
    AuthService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap:    [ AppComponent 
  ]
})
export class AppModule { }
