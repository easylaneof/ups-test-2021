import { extractCritical } from '@emotion/server';

export const renderStatic = async (
  html: string
): Promise<{ ids: string[]; css: string }> => {
  const { ids, css } = extractCritical(html);
  return { ids, css };
};
