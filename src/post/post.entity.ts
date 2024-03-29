import { Transform } from 'class-transformer';
import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'post', schema: 'test_nestjs' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @CreateDateColumn()
  updateAt: Date;

  @ManyToOne(() => User, (user) => user.posts)
  @Transform(({ obj }) => obj.user.id)
  user: User;
}
