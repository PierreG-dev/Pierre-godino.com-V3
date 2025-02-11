import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import CustomLink from '../../src/components/Layout/routing/CustomLink';
import { BackgroundContext } from '../../src/contexts/Contexts';
import { useContext } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import JSONLD from '@/utilities/JSONLD';

interface Post {
  id: number;
  content: {
    rendered: string;
  };
  title: {
    rendered: string;
  };
  featured_media: string;
  featured_image: string;
  excerpt: {
    rendered: string;
  };
  slug: string;
  date: string;
}

interface BlogProps {
  posts: Post[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const { background } = useContext(BackgroundContext);

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Articles sur la Tech, Internet & le développement WEB',
    description:
      'Découvrez les dernières tendances du numérique dans mes articles sur les domaines de la tech et internet. Créez votre site internet : 07 67 24 99 80',
    url: 'https://www.creation-sites-godino.fr/blog',
    image: 'https://www.creation-sites-godino.fr/blog-image.jpg',
    publisher: {
      '@type': 'Organization',
      name: 'Création Sites Godino',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.creation-sites-godino.fr/logo.png',
        width: 600,
        height: 60,
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((post: Post, key: number) => {
        return {
          '@type': 'ListItem',
          position: key + 1,
          item: {
            '@type': 'BlogPosting',
            headline: post.title,
            url: 'https://www.creation-sites-godino.fr/blog/' + post.slug,
            datePublished: post.date,
            image: post.featured_image,
            author: {
              '@type': 'Person',
              name: 'Pierre Godino',
            },
          },
        };
      }),
    },
  };

  return (
    <>
      <Head>
        <title>
          Articles sur la Tech, Internet & le développement WEB | Pierre G.
        </title>
        <meta
          property="og:title"
          content="Articles sur la Tech, Internet & le développement WEB | Pierre G."
        />
        <meta
          name="description"
          content="Découvrez les dernières tendances du numérique dans mes articles sur les domaines de la tech et internet. Créez votre site internet : 07 67 24 99 80"
        />
        <meta
          property="og:description"
          content="Découvrez les dernières tendances du numérique dans mes articles sur les domaines de la tech et internet. Créez votre site internet : 07 67 24 99 80"
        />
        <meta
          name="twitter:description"
          content="Découvrez les dernières tendances du numérique dans mes articles sur les domaines de la tech et internet. Créez votre site internet : 07 67 24 99 80"
        />
        <meta
          property="og:url"
          content={'https://www.creation-sites-godino.fr/blog'}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="création de sites internet, développement web, création de site responsive, création de site SEO, expert web, contact Pierre G."
        />
        <link
          rel="canonical"
          href={'https://www.creation-sites-godino.fr/blog'}
        />
      </Head>

      <MainContainer>
        <JSONLD data={jsonld} />
        {background}
        <h1>Articles récents</h1>
        <ArticlesList>
          {posts.map((post) => (
            <ArticleCard key={post.id}>
              <Thumbnail>
                {post.featured_image && (
                  <Image
                    width={350}
                    height={150}
                    src={post.featured_image}
                    alt={post.title.rendered}
                    loading="lazy"
                  />
                )}
              </Thumbnail>

              <h2
                dangerouslySetInnerHTML={{
                  __html: truncateText(post.title.rendered, 60),
                }}
              />
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: truncateText(
                      stripHtml(DOMPurify.sanitize(post.content.rendered)),
                      150
                    ),
                  }}
                />
                <footer>
                  <CustomLink href={`/blog/${post.slug}`}>
                    Lire l'article
                  </CustomLink>
                  <div>
                    <time dateTime={new Date(post.date).toISOString()}>
                      Publié le{' '}
                      {new Date(post.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <address>Pierre G.</address>
                  </div>
                </footer>
              </div>
            </ArticleCard>
          ))}
        </ArticlesList>
      </MainContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(
      'https://blog.api.pierre-godino.com/wp-json/wp/v2/posts'
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch posts, status: ${res.status}`);
    }
    const posts: Post[] = await res.json();

    // Ajouter la vignette pour chaque article
    const postsWithFeaturedImage = await Promise.all(
      posts.map(async (post) => {
        if (post.featured_media) {
          const mediaRes = await fetch(
            `https://blog.api.pierre-godino.com/wp-json/wp/v2/media/${post.featured_media}`
          );
          const mediaData = await mediaRes.json();
          post.featured_image = mediaData.source_url; // Ajouter l'URL de la vignette
        }
        return post;
      })
    );

    return {
      props: {
        posts: postsWithFeaturedImage,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

const stripHtml = (html: string): string => {
  const cleanText = html
    .replace(/<h[1-6][^>]*>.*?<\/h[1-6]>/g, '') // Supprime les titres
    .replace(/<[^>]*>?/gm, ''); // Supprime les autres balises HTML
  return cleanText.trim();
};

// const calculateReadingTime = (content: string): string => {
//   if (!content) return;
//   const textContent = content.replace(/<[^>]*>/g, '');
//   const wordCount = textContent.trim().split(/\s+/).length;
//   const readingTime = Math.ceil(wordCount / 200);
//   return `${readingTime}`;
// };

const truncateText = (text: string, maxLength: number) => {
  const plainText = text.replace(/<[^>]*>?/gm, ''); // Supprime les balises HTML
  if (plainText.length <= maxLength) return plainText;
  return `${plainText.slice(0, maxLength)}[...]`;
};

const MainContainer = styled.div`
  padding: 100px 25px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100vw;
  min-height: 100vh;
  font-family: 'Montserrat';

  h1 {
    color: #fafafa;
    font-size: 2rem;
    font-family: 'Bebas Neue';
  }
`;

const ArticlesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  z-index: 1;
`;

const ArticleCard = styled.div`
  position: relative;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 150px;
  width: 350px;
  height: 430px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  background: #fafafaef;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #040e1d;
    font-weight: 500;
    font-family: 'Bebas Neue';
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    height: 120px;
    color: #555;
  }

  footer {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: end;

    a {
      padding: 5px;
      border-radius: 3px;
      font-size: 1rem;
      font-weight: bold;
      background: #040e1d;
      color: #ffffff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    div {
      font-size: 0.8rem;
      opacity: 0.8;
    }
  }
`;

const Thumbnail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 1rem;
  width: 100%;
  height: 150px;
  background: #781611;
  border-radius: 8px 8px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
`;

export default Blog;
