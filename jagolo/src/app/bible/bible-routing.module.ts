import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibleFormComponent } from './bible-form/bible-form.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    { path: 'bible', component: BibleFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BibleRoutingModule {}
