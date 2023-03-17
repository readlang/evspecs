import ContainerClient from './ContainerClient'
import RootStyleRegistry from './emotion-mantine';
import { HeaderResponsive } from './HeaderMenu';

export const metadata = {
  title: 'EV Specs',
  description: 'Amazing Resource',
}

// header links and lables:
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
          <ContainerClient size="xl">
            {children}
          </ContainerClient>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
