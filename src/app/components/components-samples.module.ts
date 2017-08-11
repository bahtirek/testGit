import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent, ChapterComponent } from './index';
import { InputComponent } from './input/input.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookComponent, ChapterComponent, InputComponent]
})
export class ComponentsSamplesModule { }
