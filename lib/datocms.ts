import { GraphQLClient, gql } from 'graphql-request';

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

export function request({
  query,
  variables,
  preview,
}: {
  query: string;
  variables: {};
  preview?: boolean;
}): Promise<Data> {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}

export const query = gql`
  query MyQuery($locale: SiteLocale) {
    home(locale: $locale) {
      title
      description
      mainTelephoneNum
      mainButtonName
    }
    price(locale: $locale) {
      title
      description
      priceLand
      priceLandDesc
      switcherName
      holidays {
        label
        price
      }
      weekend {
        price
        label
      }
      workdays {
        price
        label
      }
      priceTrip
      priceTripDesc
      priceByKm {
        price
        label
      }
      priceByTime {
        price
        label
      }
    }
    service(locale: $locale) {
      title
      description
      service {
        title
        description
        iconName
      }
    }
  }
`;
