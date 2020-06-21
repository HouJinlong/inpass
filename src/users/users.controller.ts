import { Controller, Get,Param } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
    findAll():any {
        return this.userService.findAll();
    }
    @Get(':name')
    findOne(@Param('name') name:string):any {
        return this.userService.findOne(name);
    }
}
