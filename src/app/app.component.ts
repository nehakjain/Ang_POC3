import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ang3';

  components=[];
  
  items = [
    
  ];

  basket = [
    'Header',
    'Table',
    'Footer',
    'Time',
    'Dropdown',
    'Spinner',
    'Textbox',
    'Button',
    'Divider',
    'Mask'
  ];

  
  ngOnInit(){
 
  }
 

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
