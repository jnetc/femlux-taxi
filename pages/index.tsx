import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { request, query } from 'lib/datocms';
import { Button } from '@Components/Button';
// Context

import { ContentStore } from '@Store/contentStore';

interface Intro<T> {
  title: T;
  subtitle: T;
  id: T;
}
interface Navigation<T> {
  navigation: Array<{ link: T }>;
}
interface Data {
  intro: Intro<string>;
  nav: Navigation<string>;
}

const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data);

  const css = `
    html[data-theme=dark] {
      background-color: black;
    }
    html[data-theme=light] {
      background-color: white;
    }
  `;

  return (
    <ContentStore.Provider value={{ content: '', setContent: () => '' }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </Head>

      <main>
        <Button />
      </main>
    </ContentStore.Provider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async context => {
  console.log(context);

  const data = await request({ query, variables: { locale: context.locale } });

  console.log('__DATOCMS', data);

  return {
    props: { data },
  };
};
