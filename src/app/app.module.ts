import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { ListComponent }  from './components/list/list.component';
import { ViewComponent }  from './components/view/view.component';
import { PostComponent }  from './components/post/post.component';

import { PostService } from './services/post/post.service';

const routes: Routes = [
	{
		path: '', component: HomeComponent
	},
	{
		path: 'list', component: ListComponent
	},
	{
		path: 'view', component: ViewComponent
	},
	{
		path: 'post', component: PostComponent
	}
]

@NgModule({
  imports:      [ BrowserModule,
  				  FormsModule,
  				  HttpModule,
  				  RouterModule.forRoot(routes)
  				   ],
  declarations: [ AppComponent,
  				  HomeComponent,
  				  ListComponent,
  				  ViewComponent,
  				  PostComponent ],
  providers: [PostService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
