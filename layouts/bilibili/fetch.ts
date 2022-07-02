import type { IBUpInfoQuery, IBVideoInfoQuery } from '~types';
import { biliParser } from '~utils';
import { B_API_UP_INFO, B_API_VIDEO_INFO } from './config';

export const fetchBVideoInfo = async (bvid: string) => {
  return biliParser<IBVideoInfoQuery>(B_API_VIDEO_INFO, { bvid }, 'pic');
};

export const fetchBUpBackgroundInfo = async (uid: string) => {
  return biliParser<IBUpInfoQuery>(B_API_UP_INFO, { mid: uid }, 'top_photo');
};
