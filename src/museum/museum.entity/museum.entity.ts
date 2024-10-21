import { Column, PrimaryGeneratedColumn,OneToMany, Entity } from 'typeorm';
import { ArtworkEntity } from '../../artwork/artwork.entity/artwork.entity';
import { ExhibitionEntity } from '../../exhibition/exhibition.entity/exhibition.entity';

@Entity()
export class MuseumEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  image: string;

  @OneToMany(() => ExhibitionEntity, (exhibition) => exhibition.museum)
  exhibitions: ExhibitionEntity[];

  @OneToMany(() => ArtworkEntity, (artwork) => artwork.museum)
  artworks: ArtworkEntity[];
}
