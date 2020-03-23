import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, InputComponent],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  exports: [HeaderComponent, InputComponent]
})
export class SharedModule { }
