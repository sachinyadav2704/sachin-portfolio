import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords }) => {
  const defaultDesc = "Portfolio of a MERN Stack Developer with 4+ years experience building scalable web applications"
  const defaultKeywords = "MERN Developer, React, Node.js, MongoDB, FullStack Development, Web Applications"

  return (
    <Helmet>
      <title>{title || "MERN Developer Portfolio"}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={title || "MERN Developer Portfolio"} />
      <meta property="og:description" content={description || defaultDesc} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={window.location.href} />
      <meta property="twitter:title" content={title || "MERN Developer Portfolio"} />
      <meta property="twitter:description" content={description || defaultDesc} />
    </Helmet>
  )
}

export default SEO