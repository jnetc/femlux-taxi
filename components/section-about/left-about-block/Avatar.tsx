import Image from 'next/image';
import { useLanguageState } from '@Hooks/useLanguageState';

export const Avatar = () => {
  const { data } = useLanguageState();
  return (
    <Image
      src={data?.about.avatar.url || ''}
      alt="Inna Klimenko"
      layout="fill"
      objectFit="cover"
    />
  );
};
