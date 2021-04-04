import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';

export const apponeFeatHomeRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PageHomeComponent],
  exports: [PageHomeComponent],
})
export class ApponeFeatHomeModule {}
