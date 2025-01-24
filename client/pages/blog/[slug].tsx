import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import styled from 'styled-components';
import { BackgroundContext } from '../../src/contexts/Contexts';

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string; // Date de publication
}

interface PostPageProps {
  post: Post;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const { background } = useContext(BackgroundContext);
  const plainTextExcerpt = stripHtml(post.excerpt.rendered);

  // Génération des données structurées JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.creation-sites-godino.fr/blog/${post.id}`,
    },
    headline: post.title.rendered,
    description: plainTextExcerpt,
    image: 'https://via.placeholder.com/1200x630', // Remplacez par une image réelle
    author: {
      '@type': 'Person',
      name: 'Pierre Godino',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pierre Godino',
      logo: {
        '@type': 'ImageObject',
        url: 'https://via.placeholder.com/300x60', // Logo de l'organisation
      },
    },
    datePublished: post.date,
    dateModified: post.date,
  };

  return (
    <>
      <Head>
        <title>{post.title.rendered} | Pierre G.</title>
        <meta name="description" content={plainTextExcerpt} />
        <meta name="author" content="Pierre Godino" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`${post.title.rendered} | Pierre G.`}
        />
        <meta property="og:description" content={plainTextExcerpt} />
        <meta
          property="og:url"
          content={`https://www.creation-sites-godino.fr/blog/${post.id}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://via.placeholder.com/1200x630"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${post.title.rendered} | Pierre G.`}
        />
        <meta name="twitter:description" content={plainTextExcerpt} />
        <meta
          name="twitter:image"
          content="https://via.placeholder.com/1200x630"
        />
        <link
          rel="canonical"
          href={`https://www.creation-sites-godino.fr/blog/${post.id}`}
        />
        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {background}
      <Article>
        <header>
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <MetaInfo>
            <p>
              <time dateTime={new Date(post.date).toISOString()}>
                Publié le{' '}
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </p>
          </MetaInfo>
        </header>
        <main>
          <ArticleContent
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </main>
        <footer>
          <p>
            Partagez cet article :{' '}
            <a
              href={`https://twitter.com/share?url=https://www.creation-sites-godino.fr/blog/${
                post.id
              }&text=${encodeURIComponent(post.title.rendered)}`}
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </a>{' '}
            |{' '}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://www.creation-sites-godino.fr/blog/${post.id}`}
              target="_blank"
              rel="noopener noreferrer">
              Facebook
            </a>
          </p>
        </footer>
      </Article>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;
  try {
    const res = await fetch(
      `https://blog.api.pierre-godino.com/wp-json/wp/v2/posts?slug=${slug}`
    );
    const data = await res.json();

    if (!data || data.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: data[0],
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true,
    };
  }
};

// Utility to strip HTML tags for meta descriptions
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

const Article = styled.article`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const MetaInfo = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;

  time {
    font-style: italic;
  }
`;

const ArticleContent = styled.section`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;

  img {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
  }

  a {
    color: #0070f3;
    text-decoration: underline;
  }
`;

export default PostPage;
