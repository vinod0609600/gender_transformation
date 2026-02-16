import { useRoute } from "wouter";
import { blogPosts } from "@/lib/blog-data";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import NotFound from "./not-found";

export default function BlogPost() {
    const [match, params] = useRoute("/blog/:id");

    if (!match) return <NotFound />;

    const post = blogPosts.find(p => p.id === params.id);

    if (!post) return <NotFound />;

    return (
        <div className="min-h-screen bg-white">
            {/* Custom Header for Post */}
            <div className="relative h-[50vh] min-h-[400px]">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container px-4 text-center text-white">
                        <Link href="/blog">
                            <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 mb-6 group">
                                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                            </Button>
                        </Link>
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 max-w-4xl mx-auto leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div
                    className="prose prose-lg mx-auto prose-headings:font-serif prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="max-w-3xl mx-auto mt-12 pt-8 border-t text-center">
                    <p className="text-muted-foreground mb-6">
                        Have questions about this topic? Our team is here to help.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </article>
        </div>
    );
}
