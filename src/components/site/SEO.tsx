import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Algarve voor Bijna Niks';
const SITE_URL = 'https://algarvevoorbijnaniks.lovable.app';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  /** Page title shown in the browser tab and search results */
  title: string;
  /** Meta description (~150–160 characters) */
  description: string;
  /** Absolute or relative canonical URL for this page (optional) */
  url?: string;
  /** Social sharing image (optional, falls back to the site OG image) */
  image?: string;
}

/**
 * Reusable SEO component. Sets the document title, meta description,
 * canonical URL, Open Graph and Twitter Card tags via react-helmet-async.
 */
export default function SEO({ title, description, url, image }: SEOProps) {
  const canonical = url
    ? url.startsWith('http')
      ? url
      : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`
    : SITE_URL;
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`
    : DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph (page-specific; site-wide og:site_name / og:type / og:locale live in index.html) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter (page-specific; twitter:card lives in index.html) */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
