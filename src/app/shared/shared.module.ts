import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacePipe } from './pipes/replace-space.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReplaceSpacePipe
  ],
  exports:[
    ReplaceSpacePipe
  ],
  providers: [
    ReplaceSpacePipe
  ]
})
export class SharedModule { }
