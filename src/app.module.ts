import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MuseumModule } from './museum/museum.module';
import { ExhibitionModule } from './exhibition/exhibition.module';
import { ArtworkModule } from './artwork/artwork.module';
import { ArtistModule } from './artist/artist.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { ImageModule } from './image/image.module';
import { MovementModule } from './movement/movement.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArtistEntity } from './artist/artist.entity/artist.entity';
import { ArtworkEntity } from './artwork/artwork.entity/artwork.entity';
import { ExhibitionEntity } from './exhibition/exhibition.entity/exhibition.entity';
import { ImageEntity } from './image/image.entity/image.entity';
import { MovementEntity } from './movement/movement.entity/movement.entity';
import { MuseumEntity } from './museum/museum.entity/museum.entity';
import { SponsorEntity } from './sponsor/sponsor.entity/sponsor.entity';



@Module({
  imports: [MuseumModule, ExhibitionModule, ArtworkModule, ArtistModule, SponsorModule, ImageModule, MovementModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'puki',
      password: 'puki',
      database: 'museum',
      entities: [ArtistEntity, ArtworkEntity, ExhibitionEntity, ImageEntity, MovementEntity, MuseumEntity, SponsorEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
