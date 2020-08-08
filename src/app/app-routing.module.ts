import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./views/pages/dashboard/dashboard.component";
import {PostComponent} from "./views/pages/post/post.component";

const routes: Routes = [
    {path: "", component: DashboardComponent},
    {path: "blog/:id", component: PostComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
