export interface ITicket {
    id: string;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    type: 'task' | 'project';
    completed: boolean;
}
