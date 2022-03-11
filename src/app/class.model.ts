export interface Class {
  name: string;
  teacher: string;
  maxNoOfStudents: number;
  students: Array<{
    name: string;
  }>;
}
