'use strict';

import { Model } from 'tectonic';

export class User extends Model {
  static modelName = 'user';

  static fields = {
    id: 0,
    name: '',
    email: ''
  };
}

export class Post extends Model {
  static modelName = 'post';

  static fields = {
    id: 0,
    title: '',
    body: '',
    authorID: 0,
    author: ''
  };
}
