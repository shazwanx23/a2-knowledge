import { Component } from '@angular/core';

import { PostService } from '../../services/post/post.service';

interface Post{
	userId: string,
	id: string,
	title: string,
	body: string
}

@Component({
	moduleId: module.id,
	selector: 'post',
	templateUrl: 'post.component.html'
})
export class PostComponent{
	posts: Post[];
	constructor(private postService: PostService){
		this.posts = [
		{ userId: '1', id: '1', title: 'test post', body: 'body of test post'},
		{ userId: '2', id: '2', title: 'test post1', body: 'body of test post1'},
		{ userId: '3', id: '3', title: 'test post2', body: 'body of test post2'},
		]
		this.postService.getPosts();
	}
}