import data from "./resources.json";

export type Resource = {
  name: string;
  url: string;
  description: string;
};

export type Section = {
  id: string;
  title: string;
  resources: Resource[];
};

export const sections: Section[] = data;
