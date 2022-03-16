import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { request, query } from 'lib/datocms';

// Hooks
import { LanguageState } from '@Hooks/useLanguageState';
// Components
import { extraCSS } from '@Helpers/critical';
import Navigation from '@Components/navigation';
import Main from '@Components/section-home';
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
const GoToTop = dynamic(
  () => import('@Components/go-to-top-button/GoToTopButton'),
  {
    ssr: false,
  }
);

const Home: NextPage = ({
  data,
  lang,
  languages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <main>Sorry! This page not found.</main>;
  }

  const assignType = data as DataType;

  return (
    <LanguageState.Provider
      value={{
        language: lang,
        languages: languages,
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
        <Main />
        <Prices />
        <Services />
        <About />
      </main>
      <Footer />
      <GoToTop />
    </LanguageState.Provider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async context => {
  const data = await request({ query, variables: { locale: context.locale } });

  return {
    props: { data, lang: context.locale, languages: context.locales },
  };
};

// const data = {
//   _site: {
//     globalSeo: { fallbackSeo: { title: 'asdasd', description: 'dasdasdad' } },
//   },
//   home: {
//     title: 'Быстро Надежно Безопасно! =>',
//     description:
//       'Если желаете во время, с комфортом и с хорошим настроением добраться до места назначения - звоните и заказывайте! ',
//     mainTelephoneNum: '+358504645221',
//     mainButtonName: 'закажи такси',
//   },
//   price: {
//     title: 'стоимость проезда на такси',
//     description:
//       'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
//     priceLand: 'Стоимость посадки',
//     priceLandDesc: 'Без платы за предварительное бронирование',
//     switcherName: 'будние дни, выходные, праздники ',
//     holidays: [{ label: 'dsada', price: '25' }],
//     weekend: [{ label: 'czdw', price: '87' }],
//     workdays: [
//       { label: 'fsdf32', price: '14' },
//       { label: 'fsdf4r', price: '78' },
//     ],
//     priceTrip: 'Стоимость поездки',
//     priceTripDesc: 'Пассажиров 1-4 человека',
//     priceByKm: [{ label: 'fsdfd', price: '45' }],
//     priceByTime: [{ label: 'fshdf', price: '12' }],
//   },
//   service: {
//     title: 'услуги и возможности',
//     description:
//       'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
//     service: [
//       { title: 'asd4', description: '', iconName: 'rwr' },
//       { title: 'da4srd', description: '', iconName: 'fsd' },
//       { title: 'daesd', description: '', iconName: 'fse' },
//     ],
//   },
//   about: {
//     title: 'Обо мне',
//     description: 'Лучшие водители - это женщины!',
//     name: 'Инна Клименко',
//     proff: 'Водитель, Предприниматель',
//     aboutMe:
//       'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
//     avatar: {
//       url: '/images/car_rear.webp',
//     },
//   },
// };
