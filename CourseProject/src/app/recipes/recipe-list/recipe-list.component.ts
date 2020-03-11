import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('1-A Test Recipe', '1-This is a simply test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'),
    new Recipe('2-A Test Recipe', '2-This is a simply test', 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg')
  ];

  @Output() RecipeClickedEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.RecipeClickedEvent.emit(recipe);
  }

}
