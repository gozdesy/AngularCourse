import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   //nameInput -> Local ref name on html
   @ViewChild('nameInput', {static:false}) nameInputRef : ElementRef;
   @ViewChild('amountInput', {static:false}) amountInputRef : ElementRef;
   @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {

  }

  onAddItem(){
    const newIng = new Ingredient(
                                  this.nameInputRef.nativeElement.value,
                                 this.amountInputRef.nativeElement.value
                                 );

    this.ingredientAdded.emit(newIng);
  }

}
