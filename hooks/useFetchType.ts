import { useEffect, useState } from 'react';
import { FetchType, matchBvidReg, matchUidReg } from '~layouts/bilibili/config';
import { queryCurrentTab } from '~layouts/bilibili/utils';

export const useFetchType = () => {
  const [fetchType, setFetchType] = useState<FetchType>('unusable');

  const getCurrentFetchType = async () => {
    const current = await queryCurrentTab();
    if (current.url.match(matchBvidReg)) {
      setFetchType('preview');
    } else if (current.url.match(matchUidReg)) {
      setFetchType('cover');
    } else {
      setFetchType('unusable');
    }
  };

  useEffect(() => {
    getCurrentFetchType();
  }, []);

  return fetchType;
};
