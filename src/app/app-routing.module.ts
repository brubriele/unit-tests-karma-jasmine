import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), LikeWidgetModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
