import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dtos/createPost.dto';
import { User } from 'src/user/user.entity';
import { UpdatePostDto } from './dtos/updatePost.dto';
// import { Permission } from 'src/helpers/checkPermission.helper';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private postRepo: Repository<Post>) {}

  //CRUD
  create(requestBody: CreatePostDto, currentUser: User) {
    const post = this.postRepo.create(requestBody);

    post.user = currentUser;

    return this.postRepo.save(post);
  }

  getAll() {
    return this.postRepo.find();
  }

  get(id: number) {
    return this.postRepo.findOneBy({ id });
  }

  async update(id: number, requestBody: UpdatePostDto, currentUser: User) {
    let post = await this.get(id);

    if (!post) {
      throw new NotFoundException(`Not found post with id ${id}`);
    }

    post = { ...post, ...requestBody };

    // Permission.check(id, requestBody, currentUser);

    return this.postRepo.save(post);
  }

  async delete(id: number) {
    const post = await this.get(id);
    if (!post) {
      throw new NotFoundException(`Not found post with id ${id}`);
    }

    return this.postRepo.remove(post);
  }
}
