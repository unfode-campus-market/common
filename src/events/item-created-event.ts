import {Subjects} from "./subjects";

export interface ItemCreatedEvent {
  subject: Subjects.ItemCreated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
}