import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/User'; 
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      dbName: 'Vip_Test',   
      driver: PostgreSqlDriver,      
      user: 'admin',          
      password: 'admin',  
      host: 'localhost',             
      port: 5432,                    
      autoLoadEntities: true,         
      entities: [User],               
      debug: true,                    
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
