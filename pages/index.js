import JumboTron from "/components/JumboTron";
import PresentationSection from "/components/PresentationSection";
import MistakesSections from "/components/MistakesSections";
import PricingSection from "/components/PricingSection";
import SatisfactionSection from "/components/SatisfactionSection";
import FooterSection from "/components/FooterSection";
import Head from 'next/head';
import Script from 'next/script';
import FacebookPixel from '../components/FacebookPixel';
import {useState, useEffect, useRef} from 'react';

export default function HomePage() {
  
  const pixelIsSetted = useRef(false);
  useEffect(()=>{
    if(!pixelIsSetted.current){
      const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
      console.log({pixelId})
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', pixelId);
      fbq('track', 'PageView');
      console.log('Pixel Activated');
      pixelIsSetted.current = true;
    }
  },[]);

  return (<>
    <Head>
      {/* <FacebookPixel/> */}
      {/* <Script>
        {`console.log('ciao')`}
      </Script> */}
      <title>Rocket Profit Checklist</title>
    </Head>
    <div className="page">
        <JumboTron/>
        <PresentationSection/>
        <MistakesSections/>
        <PricingSection/>
        <SatisfactionSection/>
        <FooterSection/>
    </div>
  </>
  )
}
