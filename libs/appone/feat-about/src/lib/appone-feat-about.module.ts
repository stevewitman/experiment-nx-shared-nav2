import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PageAboutComponent } from './page-about/page-about.component';

export const apponeFeatAboutRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PageAboutComponent],
  exports: [PageAboutComponent],
})
export class ApponeFeatAboutModule {}
