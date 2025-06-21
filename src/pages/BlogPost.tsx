// src/pages/BlogPost.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { sanity } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          publishedAt,
          body,
          mainImage { asset->{url} },
          excerpt
        }`,
        { slug }
      )
      .then(setPost);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <svg className="mx-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <svg className="mx-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 truncate">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      <main className="py-12">
        <article className="max-w-4xl mx-auto px-6">
          {/* Article Header */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Article
              </span>
              <span className="text-gray-500">•</span>
              <time className="text-gray-600" dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Featured Image */}
          {post.mainImage?.asset?.url && (
            <div className="mb-12">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
            <div className="prose prose-lg prose-gray max-w-none 
                          prose-headings:text-gray-900 prose-headings:font-bold
                          prose-p:text-gray-700 prose-p:leading-relaxed
                          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                          prose-strong:text-gray-900 prose-strong:font-semibold
                          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                          prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                          prose-pre:bg-gray-900 prose-pre:text-gray-100
                          prose-img:rounded-xl prose-img:shadow-md
                          prose-ul:list-disc prose-ol:list-decimal
                          prose-li:text-gray-700">
              <PortableText value={post.body} />
            </div>
          </div>

          {/* Article Footer / Actions */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thanks for reading!
              </h3>
              <p className="text-gray-600 mb-8">
                ¿Are you ready?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Apply for the best loan
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Related Articles Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Continue Reading
            </h2>
            <p className="text-gray-600">
              Discover more insights and tutorials
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-800 font-medium rounded-xl hover:bg-gray-200 transition-all duration-200"
            >
              <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;