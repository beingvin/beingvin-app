// components/MetaTagsAbout.jsx
import { Helmet } from "react-helmet";

function MetaTagsAbout() {
  return (
    <Helmet>
      <title> About | Beingvin | Full Stack Web Developer & Designer</title>
      <meta
        name="description"
        content="Learn more about Vin – a full stack developer with a passion for clean, modern, scalable web solutions"
      />
      <link rel="canonical" href="https://beingvin.com/About" />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content="https://beingvin.com/About" />
      <meta property="og:title" content="About | Beingvin" />
      <meta
        property="og:description"
        content="Meet Vin, a full stack web developer who brings ideas to life with clean code and stunning designs."
      />
      <meta
        property="og:image"
        content="https://beingvin.com/images/favicon_io/android-chrome-512x512.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="About | Beingvin" />
      <meta
        property="twitter:description"
        content="Get to know Vin, the creative mind and developer behind Beingvin."
      />
      <meta
        property="twitter:image"
        content="https://beingvin.com/images/favicon_io/android-chrome-512x512.png"
      />
    </Helmet>
  );
}

export default MetaTagsAbout;
