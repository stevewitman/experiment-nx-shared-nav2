import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from '@reusable-nav2/appone/feat-home';
import { PageAboutComponent } from '@reusable-nav2/appone/feat-about';
import { PageContactComponent } from '@reusable-nav2/appone/feat-contact';

const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent,
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: PageAboutComponent,
  },
  {
    path: 'contact',
    component: PageContactComponent,
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('@reusable-nav2/appone/feat-blog').then(
        (m) => m.ApponeFeatBlogModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
