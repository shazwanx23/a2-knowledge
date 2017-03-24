import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { ListComponent }  from './components/list/list.component';
import { ViewComponent }  from './components/view/view.component';

const routes: Routes = [
	{
		path: '', component: HomeComponent
	},
	{
		path: 'list', component: ListComponent
	},
	{
		path: 'view', component: ViewComponent
	}
]

@NgModule({
  imports:      [ BrowserModule,
  				  FormsModule,
  				  RouterModule.forRoot(routes)
  				   ],
  declarations: [ AppComponent,
  				  HomeComponent,
  				  ListComponent,
  				  ViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
