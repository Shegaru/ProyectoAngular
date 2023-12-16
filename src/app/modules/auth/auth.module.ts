import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    JsonPipe,
    AuthRoutingModule
  ],
  exports: [
    SharedModule,
    ReactiveFormsModule,
    JsonPipe
  ]
})
export class AuthModule { }
