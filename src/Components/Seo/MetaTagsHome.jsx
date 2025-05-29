// components/MetaTagsHome.jsx
import { Helmet } from "react-helmet";

function MetaTagsHome() {
  return (
    <Helmet>
      <title>Beingvin | Full Stack Web Developer & Designer</title>
      <meta
        name="description"
        content="Welcome to Beingvin – the portfolio of a skilled full stack web developer and designer. Explore responsive, SEO-friendly, and visually engaging websites."
      />
      <link rel="canonical" href="https://beingvin.com/" />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://beingvin.com/" />
      <meta
        property="og:title"
        content="Beingvin | Full Stack Web Developer & Designer"
      />
      <meta
        property="og:description"
        content="Welcome to Beingvin – the portfolio of a skilled full stack web developer and designer. Explore responsive, SEO-friendly, and visually engaging websites."
      />
      <meta
        property="og:image"
        content="https://beingvin.com/images/favicon_io/android-chrome-512x512.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Beingvin | Full Stack Web Developer & Designer"
      />
      <meta
        property="twitter:description"
        content="Welcome to Beingvin – the portfolio of a skilled full stack web developer and designer."
      />
      <meta
        property="twitter:image"
        content="https://beingvin.com/images/favicon_io/android-chrome-512x512.png"
      />
    </Helmet>
  );
}

export default MetaTagsHome;
