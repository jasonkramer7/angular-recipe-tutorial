import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import {ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Grilled Salmon', 
      'A simple grilled salmon anyone can make', 
      'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520957651-grilled-salmon-vertical.jpg',
      [
        new Ingredient('Salmon', 2),
        new Ingredient('Butter', 4)
      ]),
    new Recipe(
      'Shredded Chicken Tacos', 
      'A tasty shredded chicken mole taco', 
      'https://www.wellplated.com/wp-content/uploads/2018/05/Instant-Pot-Shredded-Chicken-Mole-Tacos-600x714.jpg',
      [
        new Ingredient('Chicken', 3),
        new Ingredient('Tortilla', 3),
        new Ingredient('Lime', 4),
        new Ingredient('Fetta Cheese', 1)
      ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}