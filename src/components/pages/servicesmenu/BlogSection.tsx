// components/pages/home/BlogSection.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import ColorfulCard from "@/components/ui/colorful-card";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import Container from "@/components/shared/Container";
import { ArrowRight } from "lucide-react";
import { blogPostsData, blogCategories, getPostsByCategory, type BlogPost } from "@/components/data/blogData";

interface BlogSectionProps {
    showFilters?: boolean;
    limit?: number;
    featured?: boolean;
    showCTA?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({
    showFilters = true,
    limit,
    featured = false,
    showCTA = true,
}) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = getPostsByCategory(activeCategory);
    const posts = featured 
        ? filteredPosts.filter(post => post.featured)
        : filteredPosts;
    
    const displayedPosts = limit ? posts.slice(0, limit) : posts;

    return (
        <section className="w-full py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <Container>
                {/* Header */}
                <AnimatedContainer direction="up" delay={0.1}>
                    <div className="text-center mb-8 md:mb-12">
                        <Text
                            as="h6"
                            className="text-sm font-semibold text-blue-700 mb-2"
                        >
                            Our Blogs
                        </Text>
                        <Text
                            as="h2"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        >
                            Blogs Section
                        </Text>
                        <Text className="text-primary/70 text-sm md:text-base max-w-2xl mx-auto">
                            Learn more about web development & digital platforms:
                        </Text>
                    </div>
                </AnimatedContainer>

                {/* Category Filters */}
                {showFilters && (
                    <AnimatedContainer direction="up" delay={0.2}>
                        <div className="flex justify-center gap-2 mb-12 flex-wrap">
                            {blogCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeCategory === category
                                            ? "bg-black text-white shadow-lg"
                                            : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </AnimatedContainer>
                )}

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {displayedPosts.map((post, index) => (
                        <AnimatedContainer
                            key={post.id}
                            direction="up"
                            delay={0.1 + index * 0.1}
                        >
                            <BlogCard post={post} />
                        </AnimatedContainer>
                    ))}
                </div>

                {/* CTA Button */}
                {showCTA && (
                    <AnimatedContainer direction="up" delay={0.5}>
                        <div className="flex justify-center">
                            <Button
                                asChild
                                className="h-12 px-8 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                            >
                                <Link href="/blogs" className="flex items-center gap-2">
                                    Explore More Blogs
                                    <ArrowRight size={18} />
                                </Link>
                            </Button>
                        </div>
                    </AnimatedContainer>
                )}
            </Container>
        </section>
    );
};

// Blog Card Component
interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <Link href={`/blogs/${post.slug}`} className="group block h-full">
            <ColorfulCard
                variant={post.variant}
                className={`${post.bgColor} rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
                {/* Image Placeholder */}
                <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-white/50 to-white/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`${post.iconBgColor} p-4 rounded-2xl`}>
                            {post.icon}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-primary/60">
                            {post.category}
                        </span>
                        <span className="text-xs text-primary/50">
                            {post.readTime}
                        </span>
                    </div>

                    {/* Title */}
                    <Text
                        as="h3"
                        className="text-lg md:text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors"
                    >
                        {post.title}
                    </Text>

                    {/* Excerpt */}
                    <Text className="text-sm text-primary/70 mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                    </Text>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-black/10">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center">
                                <Text className="text-xs font-semibold">
                                    {post.author.charAt(0)}
                                </Text>
                            </div>
                            <Text className="text-xs font-medium">
                                {post.author}
                            </Text>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                            <span>Read More</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
            </ColorfulCard>
        </Link>
    );
};

export default BlogSection;