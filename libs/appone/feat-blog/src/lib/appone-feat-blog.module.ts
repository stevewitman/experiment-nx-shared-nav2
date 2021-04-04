import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageBlogComponent } from './page-blog/page-blog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: PageBlogComponent}
    ]),
  ],
  declarations: [PageBlogComponent],
  exports: [PageBlogComponent],
})
export class ApponeFeatBlogModule {}
