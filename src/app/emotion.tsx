'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider 
        withGlobalStyles 
        withNormalizeCSS
        theme = {{
          colorScheme: 'light', // 'dark'
          defaultRadius: 'md', // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | number
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',

          colors: {
            brand: [
              '#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', 
              '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'
            ],
          },

          primaryColor: 'brand' // example: 'blue' or 'red' or 'brand'

        }} 
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
