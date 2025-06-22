// src/pages/Blog.tsx
import { useEffect, useState } from "react";
import { sanity } from "@/lib/sanityClient";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanity
      .fetch(`*[_type == "post"] | order(publishedAt desc)[0...10] {
        _id, title, slug, publishedAt, excerpt, mainImage {
          asset->{url}
        }
      }`)
      .then(setPosts);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero SEO Optimized */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Expert Insights on Small Business Financing & Growth
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore the latest articles and resources about business loans, funding tips, financial strategies, and credit solutions tailored for entrepreneurs.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <section className="py-14 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { title: "Fresh Content", iconColor: "green", text: "Weekly updates with current market insights." },
            { title: "Expert Advice", iconColor: "blue", text: "Articles written by financial professionals." },
            { title: "Community Driven", iconColor: "purple", text: "Join discussions and get peer feedback." },
            { title: "100% Free", iconColor: "green", text: "No signups or paywalls required." }
          ].map((item, idx) => (
            <div key={idx}>
              <div className={`w-16 h-16 bg-${item.iconColor}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg className={`w-8 h-8 text-${item.iconColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600">
              Read about industry trends, funding options, and business tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post._id} to={`/blog/${post.slug.current}`} className="group">
                <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200">
                  {post.mainImage?.asset?.url && (
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}

                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span>Article</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-blue-600 text-sm font-medium group-hover:underline">
                      Read more →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No articles available at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
