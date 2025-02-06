import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import CustomLink from '../../src/components/Layout/routing/CustomLink';
import { BackgroundContext } from '../../src/contexts/Contexts';
import { useContext } from 'react';

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  featured_media: string;
  featured_image: string;
  excerpt: {
    rendered: string;
  };
  slug: string;
}

interface BlogProps {
  posts: Post[];
}

const truncateText = (text: string, maxLength: number) => {
  const plainText = text.replace(/<[^>]*>?/gm, ''); // Supprime les balises HTML
  if (plainText.length <= maxLength) return plainText;
  return `${plainText.slice(0, maxLength)}[...]`;
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const { background } = useContext(BackgroundContext);

  return (
    <>
      <Head>
        <title>Articles Tech et Internet | Pierre G.</title>
        <meta
          property="og:title"
          content="Articles Tech et Internet | Pierre G."
        />
        <meta
          name="description"
          content="Vous cherchez un expert en création de sites internet ? Contactez Pierre G. pour des solutions web sur mesure. Obtenez un site performant, responsive et optimisé pour le SEO. Disponible par email, téléphone ou via notre formulaire."
        />
        <meta
          property="og:description"
          content="Vous cherchez un expert en création de sites internet ? Contactez Pierre G. pour des solutions web sur mesure. Obtenez un site performant, responsive et optimisé pour le SEO. Disponible par email, téléphone ou via notre formulaire."
        />
        <meta
          name="twitter:description"
          content="Vous cherchez un expert en création de sites internet ? Contactez Pierre G. pour des solutions web sur mesure. Obtenez un site performant, responsive et optimisé pour le SEO. Disponible par email, téléphone ou via notre formulaire."
        />
        <meta
          property="og:url"
          content={'https://www.creation-sites-godino.fr/contact'}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="création de sites internet, développement web, création de site responsive, création de site SEO, expert web, contact Pierre G."
        />
        <link
          rel="canonical"
          href={'https://www.creation-sites-godino.fr/contact'}
        />
      </Head>

      <MainContainer>
        {background}
        <h1>Articles récents</h1>
        <ArticlesList>
          {posts.map((post) => (
            <ArticleCard key={post.id}>
              <Thumbnail>
                {post.featured_image && (
                  <img
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
                    __html: truncateText(post.excerpt.rendered, 150),
                  }}
                />
                <CustomLink href={`/blog/${post.slug}`}>
                  <a>Lire l'article</a>
                </CustomLink>
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

const MainContainer = styled.div`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100vw;
  min-height: 100vh;
  font-family: 'Montserrat';

  h1 {
    color: #fafafa;
    font-size: 2.5rem;
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
  height: 450px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  background: #fafafaef;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #040e1d;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    height: 120px;
    color: #555;
  }

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
