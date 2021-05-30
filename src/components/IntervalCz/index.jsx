import React from "react";

const clanky = [
  {
    date: "2004-07-07",
    path: "kurz-svg-struktura-dokumentu-zobrazovaci-a-vykreslovaci-model",
    title: "Kurz SVG – struktura dokumentu, zobrazovací a vykreslovací model",
  },
  {
    date: "2004-07-14",
    path: "kurz-svg-graficka-primitiva",
    title: "Kurz SVG – grafická primitiva",
  },
  {
    date: "2004-07-20",
    path: "kurz-svg-text",
    title: "Kurz SVG – text",
  },
  {
    date: "2004-07-28",
    path: "kurz-svg-vyplnovani-1",
    title: "Kurz SVG – vyplňování 1.",
  },
  {
    date: "2004-08-03",
    path: "kurz-svg-vyplnovani-2",
    title: "Kurz SVG – vyplňování 2.",
  },
  {
    date: "2004-08-11",
    path: "kurz-svg-orezavani-a-maskovani",
    title: "Kurz SVG – ořezávání a maskování",
  },
  {
    date: "2004-08-18",
    path: "kurz-svg-transformace-souradnic",
    title: "Kurz SVG – transformace souřadnic",
  },
  {
    date: "2004-09-02",
    path: "kurz-svg-neni-to-flash-a-prece-se-toci",
    title: "Kurz SVG – není to Flash a přece se točí!",
  },
  {
    date: "2004-09-15",
    path: "kurz-svg-animace-casovani",
    title: "Kurz SVG – animace (časování)",
  },
  {
    date: "2004-10-01",
    path: "kurz-svg-animace-prakticke-ukazky",
    title: "Kurz SVG – animace (praktické ukázky)",
  },
  {
    date: "2004-10-12",
    path: "kurz-svg-animace-prakticke-ukazky-pro-pokrocile",
    title: "Kurz SVG – animace (dynamika změny hodnot)",
  },
  {
    date: "2004-11-10",
    path: "kurz-svg-animace-dynamika-zmeny-hodnot",
    title: "Kurz SVG – animace (praktické ukázky pro pokročilé)",
  },
  {
    date: "2004-11-24",
    path: "kurz-svg-dom-a-javascript-pri-programovani-animaci",
    title: "Kurz SVG – DOM a JavaScript při programování animací",
  },
  {
    date: "2005-06-01",
    path: "kurz-svg-typografie-pokrocila-prace-s-textem",
    title: "Kurz SVG – typografie (pokročilá práce s textem)",
  },
  {
    date: "2005-06-22",
    path: "kurz-svg-typografie-pokrocila-prace-s-fonty",
    title: "Kurz SVG – typografie (pokročilá práce s fonty)",
  },
  {
    date: "2005-10-20",
    path: "kurz-svg-bitmapove-efekty-uvod-a-galerie",
    title: "Kurz SVG – bitmapové efekty (úvod a galerie)",
  },
  {
    date: "2005-11-09",
    path: "kurz-svg-bitmapove-efekty-definice-w3c-parametry-osvetleni",
    title: "bitmapové efekty (definice W3C, parametry osvětlení)",
  },
  {
    date: "2006-02-01",
    path: "kurz-svg-bitmapove-efekty-elementarni-graficke-filtry-1",
    title: "Kurz SVG – bitmapové efekty (elementární grafické filtry 1.)",
  },
  {
    date: "2006-02-08",
    path: "kurz-svg-bitmapove-efekty-elementarni-graficke-filtry-2",
    title: "Kurz SVG – bitmapové efekty (elementární grafické filtry 2.)",
  },
];

export default () => (
  <>
    <h2>Archiv článků na Interval.cz</h2>
    <p>
      Podle mne nejlepší český text o SVG vyšel už před spoustou let jako seriál na Interval.cz. Některé věci už jsou dnes jinak, např. SVG se dnes vkládá přímo
      jako součást HTML. Kapitoly 10–12 o animacích jsou zastaralé, dnes se místo SMIL doporučuje používat CSS přechody a animace. SMIL je považováno za
      zastaralé, očekávalo se, že podpora z prohlížečů bude postupně odstraněna – ačkoli odstraňování z Chrome bylo pozastaveno. Přesto se k seriálu vracím
      pokaždé, když s SVG pracuju. Ale některé animace (např. pohyb po určené cestě) zatím nejde pomocí CSS nahradit.
    </p>
    <ul>
      {clanky.map((clanek, index) => (
        <li key={index}>
          {index + 1}. <a href={"https://www.interval.cz/clanky/" + clanek.path}>{clanek.title}</a>
        </li>
      ))}
    </ul>
  </>
);
