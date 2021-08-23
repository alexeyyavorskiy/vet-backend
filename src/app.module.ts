import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnimalsModule } from './modules/animals/animals.module';
import { OwnersModule } from './modules/owners/owners.module';
import { Owner } from './modules/owners/owners.model';
import { Species } from './modules/specieses/species.model';
import { Address } from './modules/addresses/adresses.model';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/users/users/users.model';
import { UsersModule } from './modules/users/users/users.module';
import { Animal } from './modules/animals/animals.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [],
  imports: [
    AnimalsModule,
    OwnersModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [Species, Address, Owner, Animal, User],
      autoLoadModels: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
  ],
})
export class AppModule {
}
