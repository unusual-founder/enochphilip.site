import { createClient } from "@/common/utils/server";

export const getBlogssData = async () => {
  const supabase = createClient();

  let { data } = await supabase.from("blog_posts").select();
  return data;
};

export const getBlogsDataBySlug = async (slug: string) => {
  const supabase = createClient();

  let { data } = await supabase.from("blog_posts").select().eq("slug", slug).single();
  return data;
};
