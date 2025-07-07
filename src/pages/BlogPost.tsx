// src/pages/BlogPost.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { sanity } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Tipos para mejor type safety
interface BlogPost {
  title: string;
  publishedAt: string;
  body: any[];
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  excerpt?: string;
  author?: {
    name: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
  categories?: Array<{
    title: string;
    slug: {
      current: string;
    };
  }>;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Componentes personalizados para PortableText
  const portableTextComponents = {
    block: {
      normal: ({ children }: any) => (
        <p className="mb-6 text-lg leading-relaxed text-gray-700">{children}</p>
      ),
      h1: ({ children }: any) => (
        <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-6 leading-tight">
          {children}
        </h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 leading-tight">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3 leading-tight">
          {children}
        </h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-lg font-medium text-gray-900 mt-5 mb-2 leading-tight">
          {children}
        </h4>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-6 pr-6 py-4 my-8 italic text-gray-700 text-lg rounded-r-lg">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 text-lg">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700 text-lg">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="leading-relaxed">{children}</li>
      ),
      number: ({ children }: any) => (
        <li className="leading-relaxed">{children}</li>
      ),
    },
    marks: {
      strong: ({ children }: any) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
      ),
      em: ({ children }: any) => (
        <em className="italic text-gray-600">{children}</em>
      ),
      code: ({ children }: any) => (
        <code className="bg-gray-100 text-blue-700 px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      ),
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          className="text-blue-600 hover:text-blue-800 underline font-medium"
          target={value.blank ? '_blank' : '_self'}
          rel={value.blank ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ),
    },
    types: {
      image: ({ value }: any) => (
        <div className="my-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={value.asset.url}
            alt={value.alt || 'Blog image'}
            className="w-full h-auto object-cover"
          />
          {value.caption && (
            <p className="text-center text-sm text-gray-600 mt-2 italic">
              {value.caption}
            </p>
          )}
        </div>
      ),
    },
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const postData = await sanity.fetch(
          `*[_type == "post" && slug.current == $slug][0]{
            title,
            publishedAt,
            body,
            mainImage { 
              asset->{url},
              alt
            },
            excerpt,
            author->{ 
              name,
              image { asset->{url} }
            },
            categories[]->{ 
              title,
              slug
            }
          }`,
          { slug }
        );

        if (!postData) {
          setError('Post not found');
          return;
        }

        setPost(postData);
      } catch (err) {
        setError('Failed to load post');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
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

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {error || 'Post not found'}
            </h2>
            <p className="text-gray-600 mb-6">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/blog"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-4 border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6 text-sm text-blue-800">
          <nav className="flex items-center gap-2">
            <Link to="/" className="hover:underline transition">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:underline transition">Blog</Link>
            <span>/</span>
            <span className="truncate font-semibold">{post.title}</span>
          </nav>
        </div>
      </div>

      <main className="py-16 px-6">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.categories.map((category) => (
                  <span
                    key={category.slug.current}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Date */}
            <p className="text-blue-600 font-medium text-sm mb-4">
              Published on {formattedDate}
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Author */}
            {post.author && (
              <div className="flex items-center justify-center gap-3 mt-8">
                {post.author.image?.asset?.url && (
                  <img
                    src={post.author.image.asset.url}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <span className="text-gray-700 font-medium">
                  by {post.author.name}
                </span>
              </div>
            )}
          </header>

          {/* Main Image */}
          {post.mainImage?.asset?.url && (
            <div className="rounded-xl overflow-hidden shadow-lg mb-12 aspect-video">
              <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="max-w-none mx-auto">
            <PortableText 
              value={post.body} 
              components={portableTextComponents}
            />
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Take the Next Step?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Get the funding your business needs to grow and succeed.
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Apply for Funding
            </Link>
          </div>
        </article>
      </main>

      {/* Related Articles Section */}
      <section className="bg-blue-50 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Explore More Articles
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Insights and resources to help grow your business
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg hover:shadow-xl"
          >
            View All Articles
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;