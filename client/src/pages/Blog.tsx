import { Link } from "wouter";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
            <PageHeader
                title="Medical Insights & Stories"
                description="Expert advice, patient stories, and the latest in gender-affirming care."
                backgroundImage="https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">

                {/* Featured Post */}
                {featuredPost && (
                    <div className="mb-20">
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8 border-b pb-4">Featured Article</h2>
                        <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="overflow-hidden rounded-xl h-[400px]">
                                <img
                                    src={featuredPost.imageUrl}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs uppercase tracking-wide">
                                        {featuredPost.category}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {featuredPost.date}
                                    </div>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                    <Link href={`/blog/${featuredPost.id}`}>
                                        {featuredPost.title}
                                    </Link>
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <Link href={`/blog/${featuredPost.id}`}>
                                    <Button variant="ghost" className="p-0 h-auto text-primary font-semibold text-lg hover:bg-transparent hover:underline group-hover:translate-x-1 transition-transform">
                                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Recent Posts Grid */}
                <div>
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8 border-b pb-4">Latest Research & Guides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentPosts.map((post) => (
                            <div key={post.id} className="group flex flex-col h-full bg-white/70 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <Link href={`/blog/${post.id}`}>
                                        <img
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                                        />
                                    </Link>
                                </div>
                                <div className="flex flex-col flex-grow p-6">
                                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                        <span className="font-medium text-primary uppercase tracking-wide">
                                            {post.category}
                                        </span>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                                        <Link href={`/blog/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.id}`} className="mt-auto inline-flex items-center text-sm font-semibold text-primary hover:underline">
                                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
}
