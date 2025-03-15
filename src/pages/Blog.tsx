
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

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
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === null || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-indigo-50 py-20">
          <div className="max-w-[1312px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                OutSource Pro Blog
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Latest insights, tips, and trends on outsourcing and business optimization
              </p>
              <div className="relative max-w-xl mx-auto">
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
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1312px] mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === null
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Topics
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {filteredPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden h-full hover:shadow-md transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={14} className="mr-1" />
                        {post.readTime} min read
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="link" className="p-0 h-auto font-medium text-indigo-600 hover:text-indigo-800">
                          Read more <ArrowRight size={14} className="ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
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
                  }}
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
