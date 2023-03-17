'use client';
import { useState } from 'react';
import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
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

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    // the following 2 lines are workaround for background body not changing on toggle light/dark color scheme
    document.body.style.background = colorScheme === "dark" ? "var(--mantine-color-white)" : "var(--mantine-color-dark-7)";
    document.body.style.color = colorScheme === "dark" ? "var(--mantine-color-black)" : "var(--mantine-color-dark-0)";
  };

  return (
    <CacheProvider value={cache}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS
          theme = {{
            colorScheme: colorScheme, // colorScheme, 'light', 'dark'
            defaultRadius: 'md', // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | number
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
            
            colors: {
              custom: [
                '#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', 
                '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'
              ],
            },
            primaryColor: 'custom', // example: 'blue' or 'red' or 'custom'

            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 540,
                    sm: 720,
                    md: 960,
                    lg: 1140,
                    xl: 1400, //1320,
                  },
                },
              },
            },
            
          }} 
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  );
}
