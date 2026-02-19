import { Routes } from '@angular/router';
import { TemplateDempComponent } from './template-demo/template-demo.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';

export const routes: Routes = [
  { path: 'template-form', component: TemplateDempComponent },
  { path: 'reactive-form', component: ReactiveDemoComponent },
  { path: '', redirectTo: '/template-form', pathMatch: 'full' }
];
