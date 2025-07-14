"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import EmptyState from "@/common/components/elements/EmptyState";
import { fetcher } from "@/services/fetcher";
import { BlogItem, BlogItemProps } from "@/common/types/blogs";
import BlogCard from "./BlogCard";
import BlogSkeleton from "./BlogSkeleton";
import AdminCheck from "./UI/blog-admin";

const Blogs = () => {
  const { data, isLoading, error } = useSWR("/api/blogs", fetcher);

  const t = useTranslations("BlogPage");

 const filteredBlogs: BlogItem[] = data
  ?.filter((item: BlogItem) => item?.is_published)
  .sort((a: BlogItem, b: BlogItem) => {
    if (a.is_featured && !b.is_featured) return -1;
    if (!a.is_featured && b.is_featured) return 1;

    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

if (filteredBlogs?.length === 0) {
  return <EmptyState message={t("no_data")} />;
}


  if (error) {
    return <EmptyState message={t("error")} />;
  }

  if (isLoading) {
    return <BlogSkeleton />;
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <AdminCheck />
      {filteredBlogs?.map((blog, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <BlogCard {...blog} />
        </motion.div>
      ))}
    </section>
  );
};

export default Blogs;
