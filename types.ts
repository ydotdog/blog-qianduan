export interface BlogPost {
  id: string;
  slug: string; // Custom URL slug (e.g., 'wealth')
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string; // Simplified markdown/text content
  readingTime: string;
}

export interface SearchResult {
  post: BlogPost;
  matchType: 'title' | 'content';
}