"use client"

import { useSession } from "next-auth/react";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

const AdminCheck = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const isAdmin = session?.user?.email === process.env.BLOG_ADMIN;

  if (isAdmin) {
    return (
      <div className="p-4 flex justify-end">
        <Button onClick={() => router.push('/blog/create')}>
            Create Blog Post
        </Button>
      </div>
    );
  }

  return null;
};

export default AdminCheck;
