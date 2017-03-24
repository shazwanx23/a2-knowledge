import { Component } from '@angular/core';

import { Post } from '../../../post';
import { PostService } from '../../services/post/post.service';



@Component({
	moduleId: module.id,
	selector: 'post',
	templateUrl: 'post.component.html',	
})
export class PostComponent{
	posts: Post[];

	constructor(private _postService: PostService){		
		this._postService.getPosts()
			.subscribe(res => {
			this.posts = res;
		});
	}

	deletePost(id:any){
		this.posts.splice(id,1);
	}
	
}