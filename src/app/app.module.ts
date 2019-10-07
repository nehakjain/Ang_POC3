import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { TextboxComponent } from './textbox/textbox.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TimeComponent } from './time/time.component';
import { MaskComponent } from './mask/mask.component';
import { DividerComponent } from './divider/divider.component';
import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextboxComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    DropdownComponent,
    TimeComponent,
    MaskComponent,
    DividerComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragAndDropModule,
    DragDropModule
  ],
  exports:[
    DragDropModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    A11yModule,
    PortalModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
