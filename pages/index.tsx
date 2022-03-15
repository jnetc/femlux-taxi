import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { request, query } from 'lib/datocms';

// Context
// import { ContentStore } from '@Store/contentStore';
// Hooks
import { LanguageState, useLanguageState } from '@Hooks/useLanguageState';
import { useLangSwitcher } from '@Hooks/useLangSwitcher';
// Components
import { extraCSS } from '@Helpers/critical';
import Navigation from '@Components/navigation';
import SectionHome from '@Components/section-home';
import { DataType } from '@Types';
// Dynamic imports
const Prices = dynamic(() => import('@Components/section-prices'), {
  ssr: false,
});
const Services = dynamic(() => import('@Components/section-services'), {
  ssr: false,
});
const About = dynamic(() => import('@Components/section-about'), {
  ssr: false,
});
const Footer = dynamic(() => import('@Components/footer'), {
  ssr: false,
});

const Home: NextPage = ({
  data,
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { switchLang, languages, switchLanguages } = useLanguageState();
  const [langs] = useLangSwitcher(lang, languages);

  if (!data) {
    return <main>Sorry! This page not found.</main>;
  }
  console.log('data', data);
  const assignType = data as DataType;

  return (
    <LanguageState.Provider
      value={{
        language: lang,
        languages: langs,
        switchLang,
        switchLanguages,
        data: assignType,
      }}
    >
      <Head>
        <title>{assignType._site.globalSeo.fallbackSeo.title}</title>
        <meta
          name="description"
          content={assignType._site.globalSeo.fallbackSeo.description}
        />
        <link rel="icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{ __html: extraCSS }} />
      </Head>

      <Navigation />
      <main>
        <SectionHome />
        <Prices />
        <Services />
        <About />
      </main>
      <Footer />
    </LanguageState.Provider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async context => {
  const data = await request({ query, variables: { locale: context.locale } });

  return {
    props: { data, lang: context.locale },
  };
};
