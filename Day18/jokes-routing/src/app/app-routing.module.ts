import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { JokePageComponent } from './components/joke-page/joke-page.component'
import { SearchPageComponent } from './components/search-page/search-page.component'

const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'joke/:keyword/:index', component: JokePageComponent },
  //start with search page
  { path: '', redirectTo: 'search', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
