import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('schedule', { schema: 'public' })
export class Schedule {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @PrimaryColumn({ type: 'character varying' })
  @Column('character varying', { name: 'date', unique: false })
  date: string;

  @Column('character varying', { name: 'content', unique: false })
  content: string;

  @Column('integer', { name: 'month', unique: false })
  month: number;

  @Column('integer', { name: 'year', unique: false })
  year: number;
}
