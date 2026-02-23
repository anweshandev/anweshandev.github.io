import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { profileData } from '../data';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
}

const SEO = ({ title, description, type = 'website' }: SEOProps) => {
  const { pathname } = useLocation();
  const siteTitle = title 
    ? `${title} | ${profileData.header.name}`
    : profileData.meta.defaultTitle;
  const siteDescription = description || profileData.meta.description;

  useEffect(() => {
    document.title = siteTitle;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', siteDescription);

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', siteTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', siteDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);
  }, [siteTitle, siteDescription]);

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profileData.header.name,
    "jobTitle": profileData.header.titles[0],
    "url": window.location.origin,
    "sameAs": [
      profileData.header.contact.linkedin,
      profileData.header.contact.github
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "addressCountry": "India"
    },
    "awards": profileData.honorsAndAwards.map(a => `${a.title} (${a.year})`),
    "alumniOf": profileData.education.map(e => e.school)
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default SEO;
