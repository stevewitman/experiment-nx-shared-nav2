import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { SharedUiMenuModule } from '@reusable-nav2/shared/ui-menu'

export const apponeShellRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, SharedUiMenuModule],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ApponeShellModule {}
