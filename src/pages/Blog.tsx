
import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/ui/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Search, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  category: string;
  tags: string[];
}

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const blogPosts: BlogPost[] = [
    {
      title: "5 Ways Outsourcing Can Reduce Your Operational Costs",
      excerpt: "Discover how strategic outsourcing can help your business save up to 40% in operational expenses while improving efficiency.",
      date: "May 15, 2023",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "outsourcing-reduce-operational-costs",
      category: "Cost Optimization",
      tags: ["Cost Savings", "Operational Efficiency", "Business Strategy"]
    },
    {
      title: "The Future of IT Outsourcing: Trends to Watch",
      excerpt: "Explore emerging trends in IT outsourcing that are reshaping how businesses leverage external tech talent.",
      date: "April 22, 2023",
      readTime: "7",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "future-it-outsourcing-trends",
      category: "IT Services",
      tags: ["Technology", "Industry Trends", "IT Management"]
    },
    {
      title: "Building an Effective Remote Team Culture",
      excerpt: "Learn how to foster collaboration and maintain company culture when working with outsourced team members.",
      date: "March 10, 2023",
      readTime: "6",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "building-remote-team-culture",
      category: "Team Management",
      tags: ["Remote Work", "Company Culture", "Team Building"]
    },
    {
      title: "How to Choose the Right Outsourcing Partner",
      excerpt: "A comprehensive guide to evaluating and selecting the ideal outsourcing partner for your specific business needs.",
      date: "February 18, 2023",
      readTime: "8",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "choosing-right-outsourcing-partner",
      category: "Strategy",
      tags: ["Vendor Selection", "Business Partnerships", "Due Diligence"]
    },
    {
      title: "Top 7 Customer Support Outsourcing Strategies",
      excerpt: "Effective approaches to outsourcing your customer support while maintaining high quality service standards.",
      date: "January 25, 2023",
      readTime: "6",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "customer-support-outsourcing-strategies",
      category: "Customer Support",
      tags: ["Customer Experience", "Service Quality", "Support Teams"]
    },
    {
      title: "Understanding Compliance in Global Outsourcing",
      excerpt: "Navigate the complex regulatory landscape when outsourcing business functions across international borders.",
      date: "December 12, 2022",
      readTime: "9",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "compliance-global-outsourcing",
      category: "Legal & Compliance",
      tags: ["Regulations", "Global Business", "Risk Management"]
    }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === null || post.category === activeCategory;
    const matchesTag = activeTag === null || post.tags.includes(activeTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Loading skeleton component
  const BlogCardSkeleton = () => (
    <div className="overflow-hidden h-full rounded-md border border-gray-200">
      <Skeleton className="h-48 w-full" />
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-11/12 mb-6" />
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout>
      <PageHero
        title="OutSource Pro Blog"
        subtitle="Latest insights, tips, and trends on outsourcing and business optimization"
        bgColor="bg-gradient-to-r from-indigo-50 to-blue-50"
      >
        <div className="relative max-w-xl mx-auto mt-8">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <Search size={18} />
          </div>
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-3 border-gray-300 focus:border-indigo-500"
          />
        </div>
      </PageHero>

      <SectionContainer>
        <div className="flex flex-col space-y-8">
          {/* Categories and Tags */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeCategory === null
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      activeCategory === category
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {activeTag !== null && (
                  <button
                    onClick={() => setActiveTag(null)}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    Clear
                  </button>
                )}
                {allTags.slice(0, 8).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center gap-1",
                      activeTag === tag
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    <Tag size={12} />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredPosts.map((post, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {post.tags.slice(0, 2).map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveTag(tag);
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={14} className="mr-1" />
                        {post.readTime} min read
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="link" className="p-0 h-auto font-medium text-indigo-600 hover:text-indigo-800 group">
                          Read more 
                          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any articles matching your search criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory(null);
                  setActiveTag(null);
                }}
              >
                Reset filters
              </Button>
            </div>
          )}
        </div>
      </SectionContainer>

      {/* Newsletter Section */}
      <SectionContainer bgColor="bg-indigo-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get the latest outsourcing insights and tips delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="border-gray-300"
            />
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Subscribe
            </Button>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
};

export default BlogPage;
