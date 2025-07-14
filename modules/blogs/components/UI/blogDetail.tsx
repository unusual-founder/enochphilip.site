import Image from "next/image";
import { useTranslations } from "next-intl";

import MDXComponent from "@/common/components/elements/MDXComponent";
import { BlogItem } from "@/common/types/blogs";

const BlogDetail = ({
  title,
  cover_image,
  content,
}: BlogItem) => {
    const t = useTranslations("ProjectsPage");
    console.log(content)

  return (
    <div className="space-y-8">
      <div className="overflow-hidden">
        <Image
          src={cover_image}
          alt={title}
          width={1000}
          height={400}
          className="transition duration-500 hover:scale-[1.04]"
          priority
        />
      </div>

      {content ? (
        <div className="mt-5 space-y-6 leading-[1.8] dark:text-neutral-300">
          <MDXComponent>{content}</MDXComponent>
        </div>
      ) : null}
    </div>
  );
};

export default BlogDetail;
