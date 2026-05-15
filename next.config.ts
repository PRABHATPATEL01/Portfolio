import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';

if (isGithubActions) {
  // Extract repository name from GITHUB_REPOSITORY
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
  repo = `/${repoName}`;
}

const nextConfig: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  output: "export",
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
