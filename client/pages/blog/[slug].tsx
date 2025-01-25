import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BackgroundContext } from '../../src/contexts/Contexts';
import PhoneButton from '../../src/utilities/buttons/PhoneButton';
import QuestionsButton from '../../src/utilities/buttons/QuestionsButton';
import WebsiteButton from '../../src/utilities/buttons/WebsiteButton';

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  featured_media: string;
  featured_image_url: string;
  slug: string;
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
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const articleContentRef = useRef();

  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content.rendered;

    const foundHeadings = Array.from(tempDiv.querySelectorAll('h2, h3')).map(
      (heading, index) => {
        const id = `heading-${index}`;
        heading.setAttribute('id', id);
        return { id, text: heading.textContent || '' };
      }
    );

    articleContentRef.current &&
      (articleContentRef.current as HTMLElement)
        .querySelectorAll('h2,h3')
        .forEach((hElem, key) => (hElem.id = `heading-${key}`));

    setHeadings(foundHeadings);
  }, [post.content.rendered]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.creation-sites-godino.fr/blog/${post.slug}/`,
    },
    headline: post.title.rendered,
    description: plainTextExcerpt,
    image: post.featured_image_url,
    author: {
      '@type': 'Person',
      name: 'Pierre Godino',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pierre Godino',
      logo: {
        '@type': 'ImageObject',
        url: '/res/OG-image.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    timeRequired: `PT${calculateReadingTime(post.content.rendered)}M`,
  };

  return (
    <>
      <Head>
        <title>{post.title.rendered} | Pierre G.</title>
        <meta name="description" content={plainTextExcerpt} />
        <meta
          property="og:title"
          content={`${post.title.rendered} | Pierre G.`}
        />
        <meta property="og:description" content={plainTextExcerpt} />
        <meta
          property="og:url"
          content={`https://www.creation-sites-godino.fr/blog/${post.slug}/`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.featured_image_url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${post.title.rendered} | Pierre G.`}
        />
        <meta name="twitter:description" content={plainTextExcerpt} />
        <meta name="twitter:image" content={post.featured_image_url} />
        <link
          rel="canonical"
          href={`https://www.creation-sites-godino.fr/blog/${post.slug}/`}
        />
        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <MainContainer>
        <Article>
          <header>
            <img
              src={post.featured_image_url}
              alt={`Vignette de ${post.title.rendered}`}
              loading="lazy"
            />
            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div className="wrapper">
              {' '}
              <MetaInfo>
                <b>
                  Temps de lecture :{' '}
                  {calculateReadingTime(post.content.rendered)} minute
                  {parseInt(calculateReadingTime(post.content.rendered)) > 1
                    ? 's'
                    : ''}
                </b>
                <p>
                  <time dateTime={new Date(post.date).toISOString()}>
                    Publié le{' '}
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <address>Pierre G.</address>
                </p>
              </MetaInfo>
              <PhoneButton />
            </div>
          </header>
          <main>
            <section className="cta" style={{ marginBottom: 40 }}>
              <WebsiteButton />
            </section>
            <NavMenu>
              <h2>Table des matières</h2>
              <ul>
                {headings.map(({ id, text }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{text}</a>
                  </li>
                ))}
              </ul>
            </NavMenu>
            <ArticleContent
              ref={articleContentRef}
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

          <section className="cta" style={{ marginTop: 90 }}>
            <QuestionsButton />
          </section>
        </Article>
      </MainContainer>{' '}
      {background}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;

  try {
    // Récupérer l'article via son slug
    const res = await fetch(
      `https://blog.api.pierre-godino.com/wp-json/wp/v2/posts?slug=${slug}`
    );
    const data = await res.json();

    if (!data || data.length === 0) {
      return {
        notFound: true,
      };
    }

    const post = data[0];

    // Récupérer l'image de couverture (featured_media)
    const mediaRes = await fetch(
      `https://blog.api.pierre-godino.com/wp-json/wp/v2/media/${post.featured_media}`
    );
    const mediaData = await mediaRes.json();

    // Ajouter l'URL de l'image dans les props
    const featuredImageUrl = mediaData?.source_url || null;

    return {
      props: {
        post: {
          ...post,
          featured_image_url: featuredImageUrl,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching post or media:', error);
    return {
      notFound: true,
    };
  }
};

const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, '').trim();
};

const calculateReadingTime = (content: string): string => {
  const textContent = content.replace(/<[^>]*>/g, '');
  const wordCount = textContent.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  return `${readingTime}`;
};

const MainContainer = styled.div`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100vw;
  min-height: 100vh;
  font-family: 'Montserrat';
  z-index: 2;

  section.cta {
    position: relative;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: fit-content;

    * {
      flex-shrink: 0;
    }
  }
`;

const NavMenu = styled.nav`
  position: relative;
  top: 0;
  background: #fafafaef;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  h2 {
    margin-top: 0;
    font-size: 1.9rem;
    font-weight: 600;
    margin-bottom: 15px;

    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  ul {
    /* list-style: disc; */
    padding-left: 40px;

    @media (max-width: 600px) {
      padding: 0;
    }

    li {
      margin-bottom: 10px;

      a {
        text-decoration: none;
        color: #0070f3;

        @media (max-width: 600px) {
          font-size: 0.85rem;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Article = styled.article`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  header {
    padding: 25px;
    border-radius: 10px;
    background: #fafafaef;
    margin-bottom: 50px;
    position: relative;
    padding-top: 300px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 300px;
      width: 100%;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }

    h1 {
      font-size: 2.1rem;
      letter-spacing: 0.5px;

      @media (max-width: 600px) {
        font-size: 1.4rem;
      }
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: end;

      @media (max-width: 700px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: unset;

        button {
          margin-top: 70px;

          svg {
            filter: drop-shadow(0 0 7px gba(0, 0, 0, 0.9));
          }
        }
      }

      button {
        background: #040e1d12;
        border: 2px solid #62c087 !important;
        color: #040e1daa;
      }
    }
  }

  footer {
    p {
      color: #fafafaef;
      display: flex;
      gap: 10px;
      a {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
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
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
  }

  a {
    color: #0070f3;
    text-decoration: underline;
  }

  hr {
    border-color: transparent;
    color: transparent;
  }

  & > div {
    padding: 25px;
    border-radius: 10px;
    background: #fafafaef;

    *.large img {
      width: 100% !important;
      height: 250px;
      object-fit: cover;
    }

    strong {
      font-weight: 600;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 50px 0 10px 0;
    }

    h2 {
      margin-top: 0;
      font-size: 1.9rem;
      font-weight: 600;

      @media (max-width: 600px) {
        font-size: 1.2rem;
      }
    }
    h3 {
      margin-top: 0;
      font-size: 1.5rem;
      font-weight: normal !important;

      @media (max-width: 600px) {
        font-size: 1.1rem;
      }
    }

    h4 {
      margin-top: 30px;
      font-size: 1rem;
      font-weight: normal !important;

      @media (max-width: 600px) {
        font-size: 0.9rem;
      }
    }
  }
`;

export default PostPage;
