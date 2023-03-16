import RootStyleRegistry from './emotion';
import { HeaderResponsive } from './HeaderMenu';

export const metadata = {
  title: 'EV Specs',
  description: 'Amazing Resource',
}

const links = [
  { "link": "/",      "label": "Home" },
  { "link": "/specs", "label": "Specs" },
  { "link": "/about", "label": "About" },
  { "link": "/pricing", "label": "Pricing" },
  { "link": "/example", "label": "Example" }
]


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head />
      <body>
        <RootStyleRegistry>
          <HeaderResponsive links = {links} />
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
