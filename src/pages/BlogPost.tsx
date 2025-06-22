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
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-4 border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6 text-sm text-blue-800">
          <nav className="flex items-center gap-2">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <span className="truncate font-semibold">{post.title}</span>
          </nav>
        </div>
      </div>

      <main className="py-16 px-6">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <p className="text-blue-600 font-medium text-sm mb-2">
              Published on {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {post.excerpt}
              </p>
            )}
          </header>

          {post.mainImage?.asset?.url && (
            <div className="rounded-xl overflow-hidden shadow-lg mb-12 aspect-video">
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose lg:prose-xl max-w-none mx-auto text-gray-800">
            <PortableText value={post.body} />
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanks for reading!</h3>
            <p className="text-gray-600 mb-6">Ready to take the next step?</p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
            >
              Apply for Funding
            </Link>
          </div>
        </article>
      </main>

      <section className="bg-blue-50 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Explore More Articles</h2>
          <p className="text-gray-600 mb-6">Insights and resources to grow your business</p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            View Blog
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
