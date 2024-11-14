// src/app.module.ts
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/User';  // Import the User entity
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      dbName: 'your-database-name',   // e.g., 'testdb'
      driver: PostgreSqlDriver,       // PostgreSQL type
      user: 'your-db-user',           // Database user
      password: 'your-db-password',   // Database password
      host: 'localhost',              // Database host
      port: 5432,                     // PostgreSQL default port
      autoLoadEntities: true,         // Automatically load entities
      entities: [User],               // Explicitly include the User entity
      debug: true,                    // Enable SQL query debugging (optional)
    }),
    // MikroOrmModule.forFeature([User]),  // Remove this line
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
