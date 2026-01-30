export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  STORY = 'story',
  MESA = 'mesa-quantionica',
  CONVENCIONAL = 'psicologia-convencional',
  GROUPS = 'grupos',
  PACKAGES = 'pacotes',
  TESTIMONIALS = 'depoimentos',
  CONTACT = 'agendar',
  YOUTUBE = 'youtube',
}

export type Language = 'pt' | 'fr' | 'de';

export interface BookingForm {
  name: string;
  age: string;
  location: string;
  reason: string;
}

export interface GroupSession {
  id: string;
  title: string;
  description: string;
  image: string;
  schedule: string;
}