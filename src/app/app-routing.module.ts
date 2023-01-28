import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponentsComponent } from './components/pages/all-components/all-components.component';
import { NewClientIdentificationComponent } from './components/pages/new-client-identification/new-client-identification.component';

const routes: Routes = [
  { path: '', component: NewClientIdentificationComponent },
  { path: 'all-components', component: AllComponentsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
