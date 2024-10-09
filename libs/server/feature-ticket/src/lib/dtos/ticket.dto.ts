import {
  IsBoolean,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ITicket } from '@fst/shared/domain';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateTicketDto implements Pick<ITicket, 'title' | 'description' | 'priority' | 'type' | 'completed'> {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  priority!: 'low' |'medium' | 'high';

  @IsString()
  @IsNotEmpty()
  type!: 'task' | 'project';

  @IsBoolean()
  @IsNotEmpty()
  completed!: boolean
}
