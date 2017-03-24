import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
	getPosts(){
		console.log('this is from service');
	}
}