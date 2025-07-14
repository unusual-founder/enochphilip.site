"use client";

import './styles.scss'
import axios from "axios";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import InputWithLabel from "./UI/inputwithlabel";
import { ImageInput } from "./UI/image-input";
import { CheckBox } from "./UI/check-box";
import { Button, Label, Textarea, Toast } from "flowbite-react";
import TiptapEditor from "./UI/tiptap-editor";
import useNotif from '@/hooks/useNotif';
import { createClient } from '@/common/utils/client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function CreateBlogPage() {
  const [isFormCollapsed, setIsFormCollapsed] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    tags: "",
    category: [],
    cover_image: "",
    is_published: false,
    is_featured: false,
  });
  const { data: session } = useSession();
  const [redirectTimeout, setRedirectTimeout] = useState(false);
  const router = useRouter();

  const notif = useNotif();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileSelected = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    console.log(name + ": " + value);

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "category") {
        updated.category = value.split(",").map((item: string) => item.trim());
      }

      if (name === "title") {
        updated.slug = value
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-');
      }

      return updated;
    });
  };



  const handleSubmit = async () => {
    const { title, category, tags, description } = formData;

    const supabase = await createClient();

    if (!title || !category || !tags || !description || !selectedFile) {
      setIsFormCollapsed(false);
      notif("Please fill in all required fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      const filePath = `uploads/${Date.now()}_${selectedFile.name}`;

      const { error } = await supabase.storage
        .from("portfolio")
        .upload(filePath, selectedFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        throw error;
      }

      const { data } = supabase.storage
        .from("your-bucket-name")
        .getPublicUrl(filePath);
      
      setFormData(prevFormData => ({
        ...prevFormData,
        cover_image: data.publicUrl,
      }));

      const response = await axios.post("/api/blogs", formData);

      notif("Blog post created successfully!");
    } catch (error) {
      notif("Error creating blog post.")
      console.error("Error creating blog post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
   useEffect(() => {
    if (redirectTimeout) {
      setTimeout(() => {
        router.push('/blog');
      }, 5000);
    }
  }, [redirectTimeout]);

  if (session?.user?.email === process.env.BLOG_ADMIN) {
    return (
      <div className="px-4 py-6 flex flex-col gap-6">
        <Button onClick={() => setIsFormCollapsed(!isFormCollapsed)} className="mb-4 text-gray-700 dark:text-gray-300">
          {isFormCollapsed ? "Show Form" : "Hide Form"}
        </Button>
        
        <motion.div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isFormCollapsed ? "hidden" : ""}`} initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}>
          <div>
            <InputWithLabel
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <InputWithLabel
              label="Category"
              name="category"
              value={formData.category.join(", ")}
              onChange={handleChange}
            />
          </div>

          <div>
            <InputWithLabel
              label="Tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-6 items-center">
            <CheckBox
              id="is_featured"
              name="is_featured"
              label="Featured"
              checked={formData.is_featured}
              onChange={handleChange}
            />
            <CheckBox
              id="is_published"
              label="Publish"
              name="is_published"
              checked={formData.is_published}
              onChange={handleChange}
            />
          </div>

          <div className="sm:col-span-2 w-full">
            <div className="max-w-full">
              <div className="mb-2 block">
                <Label
                  htmlFor="description"
                  className="text-gray-900 dark:text-[#E4E6EB]"
                >
                  Description
                </Label>
              </div>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter post description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full text-gray-900 dark:text-[#E4E6EB] dark:bg-[#121212] dark:border-gray-700"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <ImageInput onFileSelected={handleFileSelected} />
          </div>

          </motion.div>
        <TiptapEditor
          value={formData.content}
          onChange={(val) =>
            setFormData((prev) => ({ ...prev, content: val }))
          }
        />
        <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleSubmit} disabled={isSubmitting}>
         {isSubmitting ? 'Posting...' : 'Post'}
      </Button>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>
          <h2 className="text-xl font-semibold mb-4">Please login to create a blog post</h2>
          <Button onClick={() => signIn("github")} color="light" className="mr-4">
            Login with GitHub
          </Button>
          <Button onClick={() => signIn("google")} color="light">
            Login with Google
          </Button>
        </div>
      </div>
    );
  }

  if (session?.user?.email !== process.env.BLOG_ADMIN) {
    setRedirectTimeout(true);
    return (
      <div className="flex items-center justify-center h-screen">
        <div>
          <h2 className="text-xl font-semibold mb-4">You must be an admin to create a blog post.</h2>
          <p className="text-gray-600">Redirecting back to the blog in 5 seconds...</p>
        </div>
      </div>
    );
  }

  return null;
}