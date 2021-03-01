import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('letters')
class Letter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  letter: string;

  @Column()
  address: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Letter;
