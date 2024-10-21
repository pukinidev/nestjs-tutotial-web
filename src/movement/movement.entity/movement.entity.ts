import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { ArtistEntity } from '../../artist/artist.entity/artist.entity';

@Entity()
export class MovementEntity {
   @PrimaryGeneratedColumn("uuid")
   id: string;
   @Column()
   name: string;
   @Column()
   description: string;
 
   @Column()
   countryOfOrigin: string;

   @ManyToMany(() => ArtistEntity, artist => artist.movements)
   @JoinTable()
   artists: ArtistEntity[];
}