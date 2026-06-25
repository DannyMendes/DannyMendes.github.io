import { useState, useEffect } from "react";
import { profile, FEATURED_REPO } from "../data/profile";
import { FALLBACK_PROJECTS } from "../data/projects";
import type { GitHubRepo } from "../types/github";

export function useGithubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${profile.github.username}/repos?sort=updated&per_page=20`,
    )
      .then((r) => r.json())
      .then((data) => {
        if (!Array.isArray(data)) return;
        const valid = data
          .filter((r: GitHubRepo) => r.description)
          .map((r: GitHubRepo) => ({
            ...r,
            featured: r.name === FEATURED_REPO,
          }));
        if (valid.length > 0) setRepos(valid);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const featured = repos.find((r) => r.featured) || repos[0];
  const others = repos.filter((r) => r !== featured).slice(0, 6);

  return { featured, others, loading };
}
