import { Module } from '@nestjs/common';
import { FeatureTicketController } from './feature-ticket.controller';
import { FeatureTicketService } from './feature-ticket.service';

@Module({
  controllers: [FeatureTicketController],
  providers: [FeatureTicketService],
  exports: [FeatureTicketService],
})
export class FeatureTicketModule {}
