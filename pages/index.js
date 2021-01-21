import Head from 'next/head';

export default function Home() {
  return (
    <div className={'flex flex-col'}>
      <a href="/about/experiences">Experiences</a>
      <a href="/about/curiculum">CV</a>

      <p>port: {}</p>
    </div>
  );
}
