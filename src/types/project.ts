export interface Project {
  id: number;
  documentId: string;
  title: string;
  description: string;
  type: string;
  github_link: string;
  deploy_link: string;
  technologies: Technology[];
  image: Image[];
}

export interface Image {
  id: number;
  documentId: string;
  url: string;
}

export interface Technology {
  id: number;
  documentId: string;
  name: string;
}
