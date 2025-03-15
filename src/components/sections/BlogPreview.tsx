
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  category: string;
}

const BlogPostCard = ({ title, excerpt, date, readTime, image, slug, category }: BlogPostProps) => (
  <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
    <div className="aspect-video w-full overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
    </div>
    <CardHeader>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800">
          {category}
        </span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-700">
        {excerpt}
      </CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between">
      <div className="flex items-center text-sm text-gray-500">
        <Clock size={14} className="mr-1" />
        {readTime} min read
      </div>
      <Link to={`/blog/${slug}`}>
        <Button variant="link" className="p-0 h-auto font-medium text-indigo-600 hover:text-indigo-800">
          Read more <ArrowRight size={14} className="ml-1" />
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export const BlogPreview = () => {
  const blogPosts: BlogPostProps[] = [
    {
      title: "5 Ways Outsourcing Can Reduce Your Operational Costs",
      excerpt: "Discover how strategic outsourcing can help your business save up to 40% in operational expenses while improving efficiency.",
      date: "May 15, 2023",
      readTime: "5",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "outsourcing-reduce-operational-costs",
      category: "Cost Optimization"
    },
    {
      title: "The Future of IT Outsourcing: Trends to Watch",
      excerpt: "Explore emerging trends in IT outsourcing that are reshaping how businesses leverage external tech talent.",
      date: "April 22, 2023",
      readTime: "7",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "future-it-outsourcing-trends",
      category: "IT Services"
    },
    {
      title: "Building an Effective Remote Team Culture",
      excerpt: "Learn how to foster collaboration and maintain company culture when working with outsourced team members.",
      date: "March 10, 2023",
      readTime: "6",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "building-remote-team-culture",
      category: "Team Management"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1312px] mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Insights</h2>
          <Link to="/blog">
            <Button variant="outline" className="font-medium">
              View all articles <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
