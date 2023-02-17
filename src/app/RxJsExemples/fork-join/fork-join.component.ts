import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Post, User } from './../../types/types';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css'],
})
export class ForkJoinComponent {
  users: User[] = [];
  posts: Post[] = [];
  constructor(http: HttpClient) {
    forkJoin({
      users: http.get<User[]>('https://jsonplaceholder.typicode.com/users'),
      posts: http.get<Post[]>('https://jsonplaceholder.typicode.com/posts'),
    }).subscribe((usersAndPosts) => {
      console.log(usersAndPosts);
      this.posts = usersAndPosts.posts;
      this.users = usersAndPosts.users;
    });
    forkJoin([
      http.get<User[]>('https://jsonplaceholder.typicode.com/users'),
      http.get<Post[]>('https://jsonplaceholder.typicode.com/posts'),
    ]).subscribe(([users, posts]) => {
      console.log(users);
      console.log(posts);

      this.posts = posts;
      this.users = users;
    });
  }
}
