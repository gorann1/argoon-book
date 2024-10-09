import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FeatureTicketService } from './feature-ticket.service';
import { ITicket } from '@fst/shared/domain';
import { CreateTicketDto } from './dtos/ticket.dto';

@Controller('feature-ticket')
export class FeatureTicketController {
  constructor(private featureTicketService: FeatureTicketService) {}

  @Get('')
  getAll(): ITicket[] {
    return this.featureTicketService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): ITicket {
    return this.featureTicketService.getOne(id);
  }

  @Post('')
  create(@Body() data: CreateTicketDto): ITicket {
    return this.featureTicketService.create(data);
  }
}
