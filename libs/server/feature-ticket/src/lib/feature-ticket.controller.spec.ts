import { Test } from '@nestjs/testing';
import { FeatureTicketController } from './feature-ticket.controller';
import { FeatureTicketService } from './feature-ticket.service';

describe('FeatureTicketController', () => {
  let controller: FeatureTicketController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeatureTicketService],
      controllers: [FeatureTicketController],
    }).compile();

    controller = module.get(FeatureTicketController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
