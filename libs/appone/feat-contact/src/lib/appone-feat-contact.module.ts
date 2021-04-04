import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PageContactComponent } from './page-contact/page-contact.component';

export const apponeFeatContactRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PageContactComponent],
  exports: [PageContactComponent],
})
export class ApponeFeatContactModule {}
