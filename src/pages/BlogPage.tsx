
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from '@/components/ui/motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Modern Web Development Practices in 2023",
      excerpt: "Explore the latest trends and best practices in web development that are shaping the industry this year.",
      date: "October 15, 2023",
      tags: ["Web Development", "Trends", "JavaScript"],
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "How to Build Performant React Applications",
      excerpt: "Learn the techniques and strategies to optimize your React applications for maximum performance.",
      date: "September 22, 2023",
      tags: ["React", "Performance", "Frontend"],
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "The Future of Backend Development",
      excerpt: "Discover emerging technologies and methodologies that will define backend development in the coming years.",
      date: "August 10, 2023",
      tags: ["Backend", "NodeJS", "Databases"],
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Mastering CSS Grid and Flexbox",
      excerpt: "A comprehensive guide to creating complex layouts with modern CSS layout techniques.",
      date: "July 5, 2023",
      tags: ["CSS", "Design", "Frontend"],
      readTime: "15 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Link to="/">
              <Button variant="ghost" className="mb-4 -ml-4 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog & Insights
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground max-w-3xl">
              Thoughts, tutorials, and insights on web development, design, and technology.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover-card overflow-hidden border bg-card transition-all duration-300">
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="space-x-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-foreground/80">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-primary">
                    Read More →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
