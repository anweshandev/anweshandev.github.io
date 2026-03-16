import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { profileData } from '../../data';

interface SEOProps {
  title?: string;
  description?: string;
  type?: 'website' | 'article';
}

const SEO = ({ title, description, type = 'website' }: SEOProps) => {
  const { pathname } = useLocation();
  
  const siteTitle = useMemo(() => {
    if (title) return `${title} | ${profileData.header.name}`;
    if (pathname === '/') return profileData.meta.siteTitleVariants[0];
    return profileData.meta.defaultTitle;
  }, [title, pathname]);

  const siteDescription = description || profileData.meta.description;

  useEffect(() => {
    document.title = siteTitle;
    
    // Update basic meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
        const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
        let element = document.querySelector(selector);
        if (!element) {
            element = document.createElement('meta');
            if (isProperty) element.setAttribute('property', name);
            else element.setAttribute('name', name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    updateMeta('description', siteDescription);
    updateMeta('keywords', profileData.meta.keywords.join(', '));
    updateMeta('theme-color', profileData.meta.themeColor);

    // Update OG tags
    updateMeta('og:title', siteTitle, true);
    updateMeta('og:description', siteDescription, true);
    updateMeta('og:url', window.location.href, true);
    updateMeta('og:type', type, true);
    updateMeta('og:site_name', profileData.header.name, true);

    // Update Twitter tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', siteTitle);
    updateMeta('twitter:description', siteDescription);

  }, [siteTitle, siteDescription, type]);

  // JSON-LD Structured Data
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": profileData.header.name,
    "description": profileData.summary.short,
    "jobTitle": profileData.header.titles.join(', '),
    "url": window.location.origin,
    "image": `${window.location.origin}/logo.svg`,
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
    "worksFor": {
        "@type": "Organization",
        "name": profileData.experience[0].company
    },
    "knowsAbout": [
        ...profileData.coreCompetencies,
        ...Object.values(profileData.skills).flat()
    ],
    "award": profileData.honorsAndAwards.map(a => `${a.title} (${a.year})`),
    "alumniOf": profileData.education.map(e => ({
        "@type": "EducationalOrganization",
        "name": e.school
    }))
  }), []);

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default SEO;
