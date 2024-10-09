import { Injectable, NotFoundException } from '@nestjs/common';
import { ITicket } from '@fst/shared/domain';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class FeatureTicketService {
  private tickets$$ = new BehaviorSubject<ITicket[]>([

    { id: '1', title: 'Feature A', description: 'Implement feature A', priority: 'medium', type: 'project', completed: false },
    { id: '2', title: 'Feature B', description: 'Implement feature B', priority: 'high', type: 'task', completed: false },
    { id: '3', title: 'Feature C', description: 'Implement feature C', priority: 'low', type: 'project', completed: false }

  ]);

    getAll(): ITicket[] {
        return this.tickets$$.value;
    }

    getOne(id: string): ITicket {
        const ticket = this.tickets$$.value.find(tc => tc.id === id);
        if (!ticket) {
            throw new NotFoundException(`Ticket could not be found!`)
        }
        return ticket
    }

    create(ticket: Pick<ITicket, 'title' | 'description' | 'priority' | 'type' | 'completed'>): ITicket {
      const current = this.tickets$$.value;
      // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
      const newTicket: ITicket = {
        ...ticket,
        id: `ticket-${Math.floor(Math.random() * 10000)}`,
        completed: false,
      };
      this.tickets$$.next([...current, newTicket]);
      return newTicket;
    }

}
