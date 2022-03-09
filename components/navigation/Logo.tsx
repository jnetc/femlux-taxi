import styled from 'styled-components';
import Link from 'next/link';
// Hooks
import { useLanguageState } from '@Hooks/useLanguageState';

export const SvgStyle = styled.svg.attrs(() => ({
  viewBox: '0 0 110 42',
}))`
  height: 42px;
  @media (max-width: 960px) {
    height: 28px;
  }
  .primary-fill {
    fill: ${({ theme }) => theme.colors.primary};
  }
  .white-to-black {
    fill: ${({ theme }) => theme.colors.txtPrimaryClr};
  }
  .black-to-white {
    fill: ${({ theme }) => theme.colors.bg};
  }
`;

export const Logo = () => {
  const { language } = useLanguageState();
  return (
    <Link href={`/${language === 'fi' ? '' : language}`}>
      <a>
        <SvgStyle>
          <path
            d="M11.1437 34.2565H3.91709V41.6644H0.142944V23.4659H12.0444V26.5062H3.91709V31.2163H11.1437V34.2565Z"
            className="primary-fill"
          />
          <path
            d="M27.8272 33.7855H20.5791V38.7098H29.1567V41.6644H16.8049V23.4659H29.0495V26.5062H20.4719V30.7881H27.7199L27.8272 33.7855Z"
            className="primary-fill"
          />
          <path
            d="M38.7421 23.4659L43.4384 36.6973L48.1132 23.4659H53.1096V41.6644H49.3355V36.7401L49.7 28.1761L44.7679 41.6644H42.1732L37.2625 28.0691L37.6271 36.633V41.6644H33.8529V23.4659H38.7421Z"
            className="primary-fill"
          />
          <path
            d="M62.7381 38.7098H70.7581V41.6644H58.9854V23.4659H62.7381V38.7098Z"
            className="white-to-black"
          />
          <path
            d="M89.0284 23.4659V35.4983C89.0738 36.3762 88.9287 37.2534 88.603 38.0701C88.2773 38.8867 87.7787 39.6235 87.1413 40.2299C85.6786 41.3549 83.8841 41.965 82.0377 41.965C80.1912 41.965 78.3967 41.3549 76.934 40.2299C76.2933 39.6422 75.7887 38.922 75.4554 38.1196C75.122 37.3172 74.968 36.4519 75.004 35.584V23.4659H78.7782V35.5197C78.7353 35.9905 78.7893 36.465 78.9368 36.9142C79.0843 37.3634 79.3222 37.7777 79.6359 38.1317C79.9596 38.417 80.3364 38.6358 80.7449 38.7754C81.1533 38.915 81.5854 38.9727 82.0162 38.9453C84.1606 38.9453 85.2114 37.832 85.2543 35.6268V23.4659H89.0284Z"
            className="white-to-black"
          />
          <path
            d="M101.252 29.7605L104.661 23.4659H108.95L103.61 32.5223L109.143 41.6644H104.854L101.337 35.2414L97.7132 41.6644H93.4244L98.7854 32.5223L93.4673 23.4659H97.7561L101.252 29.7605Z"
            className="white-to-black"
          />
          <path
            d="M8.46323 0.985535V9.29258H0.142944V0.985535H8.46323ZM8.46323 17.621H16.805V9.29258H8.46323V17.621ZM16.805 0.985535V9.29258H25.1252V0.985535H16.805ZM25.1252 17.621H33.4455V9.29258H25.1252V17.621ZM33.4455 0.985535V9.29258H41.7872V0.985535H33.4455ZM41.7872 17.621H50.1075V9.29258H41.7872V17.621ZM50.1075 0.985535V9.29258H58.4278V0.985535H50.1075ZM58.4278 17.621H66.7481V9.29258H58.4278V17.621ZM75.197 0.985535H66.7481V9.29258H75.197V17.621H109.143V0.985535H75.197Z"
            className="white-to-black"
          />
          <path
            d="M84.6968 6.7234H82.2093V13.4889H80.5366V6.7234H78.0706V5.37457H84.6968V6.7234ZM90.7225 11.819H87.7847L87.2272 13.4889H85.4473L88.4709 5.37457H90.0149L93.0599 13.4889H91.2801L90.7225 11.819ZM88.235 10.4701H90.3794L89.2429 7.40852L88.235 10.4701ZM97.8848 8.17927L99.4074 5.37457H101.337L98.957 9.39964L101.38 13.4889H99.4503L97.8848 10.6414L96.3194 13.4889H94.368L96.7912 9.39964L94.4967 5.37457H96.4266L97.8848 8.17927ZM105.219 13.4889H103.546V5.37457H105.219V13.4889Z"
            className="black-to-white"
          />
        </SvgStyle>
      </a>
    </Link>
  );
};
