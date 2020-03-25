import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibleRoutingModule } from './bible-routing.module';
import { BibleFormComponent } from './bible-form/bible-form.component';


@NgModule({
  declarations: [BibleFormComponent],
  imports: [
    CommonModule,
    BibleRoutingModule
  ]
})
export class BibleModule { }
