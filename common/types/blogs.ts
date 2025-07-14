export type BlogItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[];
  category: string;
  cover_image: string;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
};

export type BlogItemProps = {
  projects: BlogItem[];
}