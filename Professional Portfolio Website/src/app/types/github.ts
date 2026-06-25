export type GitHubRepo = {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  featured?: boolean;
};
