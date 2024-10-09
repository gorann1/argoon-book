import { Test } from '@nestjs/testing';
import { FeatureTicketService } from './feature-ticket.service';

describe('FeatureTicketService', () => {
  let service: FeatureTicketService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [FeatureTicketService],
    }).compile();

    service = module.get(FeatureTicketService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
