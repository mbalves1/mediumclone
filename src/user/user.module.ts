import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from '@app/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { AuthGuard } from '@app/guards/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, AuthGuard],
  exports: [UserService],
})
export class UserModule {}
