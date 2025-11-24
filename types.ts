export interface GroupSession {
  id: string;
  title: string;
  description: string;
  image: string;
  schedule: string;
}

export interface CalendarSlot {
  time: string;
  available: boolean;
}

export interface BookingForm {
  name: string;
  age: string;
  location: string;
  reason: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  MESA = 'mesa',
  GROUPS = 'groups',
  AI_INSIGHT = 'ai-insight',
  TESTIMONIALS = 'testimonials',
  CONTACT = 'contact'
}