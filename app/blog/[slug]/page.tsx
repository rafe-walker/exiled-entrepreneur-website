import { motion } from 'framer-motion';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../posts';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import ClientBlogPost from './client-blog-post';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <ClientBlogPost post={post} allPosts={getAllPosts().filter((p) => p.slug !== slug)} slug={slug} />;
}
