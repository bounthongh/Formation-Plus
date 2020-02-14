import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from './config/config.module'
import { ConfigService } from './config/config.service'
import { StudentModule } from './student/student.module'
import { ConventionModule } from './convention/convention.module'
import { AttestationModule } from './attestation/attestation.module'

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // Configure db for typeorm with ConfigService
      useFactory: async (configService: ConfigService) => ({
        type: configService.get('TYPEORM_CONNECTION') as 'mysql',
        host: configService.get('TYPEORM_HOST'),
        port: Number(configService.get('TYPEORM_PORT')),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        database: configService.get('TYPEORM_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
      }),
    }),
    StudentModule,
    ConventionModule,
    AttestationModule,
  ],
})
export class AppModule {}
