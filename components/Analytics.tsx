"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script src="https://analytics.ahrefs.com/analytics.js" data-key="1lMb3NPMrXcmUBqHNBLwNw" strategy="afterInteractive" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-98SSJ8YV1J" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-98SSJ8YV1J');
        `}
      </Script>
    </>
  );
}
