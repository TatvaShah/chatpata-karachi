import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Chatpata Karachi",
  tagline: "Homemade Karachi style halal food and event catering across the GTA.",
  category: "Halal catering and homemade food",
  schemaType: "FoodEstablishment",
  area: "GTA, ON",
  siteUrl: "https://chatpata-karachi.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#c41e3a" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "A little Karachi in every bite",
    headline: "Homemade halal food for your next gathering",
    subhead:
      "Karachi style biryani, sliders, aloo puffs, and more, made fresh for hi teas, dawats, and everyday cravings across the GTA. Send a DM to order.",
    images: [
      { src: "/images/post-4.jpg", alt: "Karachi style chicken biryani trays by Chatpata Karachi", width: 1080, height: 1440 },
      { src: "/images/post-2.jpg", alt: "Chicken cheese sliders", width: 1080, height: 1353 },
      { src: "/images/post-7.jpg", alt: "Strawberry tres leches cake", width: 1080, height: 1440 },
    ],
    secondaryCta: { label: "See the menu", href: "#menu" },
  },

  highlights: [
    "Homemade fresh halal food",
    "Serving all across the GTA",
    "Hi tea and event catering",
    "Orders by Instagram DM",
  ],

  about: {
    title: "A little Karachi in every bite",
    body: [
      "Chatpata Karachi brings homemade, fresh halal food to tables across the Greater Toronto Area. From Karachi style biryani and chicken cheese sliders to flaky aloo puffs and sweet finishes, every order is made with care.",
      "You plan the event, we handle the food. Whether it is a hi tea, a dawat, or an everyday craving, send a DM with what you need and when.",
    ],
    image: { src: "/images/post-3.jpg", alt: "Catered event spread from Chatpata Karachi", width: 1080, height: 962 },
  },

  menu: {
    label: "Menu",
    title: "What we make",
    intro: "Favourites from recent orders. Message us for full trays, guest counts, and custom spreads.",
    variant: "cards",
    groups: [
      {
        title: "Savoury favourites",
        items: [
          {
            name: "Karachi style chicken biryani",
            dietary: ["halal"],
            image: { src: "/images/post-4.jpg", alt: "Karachi style chicken biryani" },
            href: "https://www.instagram.com/p/Dde-KO-mopt/",
          },
          {
            name: "Chicken cheese sliders",
            dietary: ["halal"],
            image: { src: "/images/post-2.jpg", alt: "Chicken cheese sliders" },
            href: "https://www.instagram.com/p/DeFovj9Gp_z/",
          },
          {
            name: "Aloo puffs",
            description: "Flaky pastries, great for hi tea.",
            dietary: ["halal", "veg"],
            image: { src: "/images/post-1.jpg", alt: "Aloo puffs" },
            href: "https://www.instagram.com/p/DecjknWGiRo/",
          },
          {
            name: "Club sandwiches",
            dietary: ["halal"],
            image: { src: "/images/post-6.jpg", alt: "Club sandwiches and party trays" },
            href: "https://www.instagram.com/p/Dc4M1gnmr-m/",
          },
          {
            name: "Dragon chicken and Chinese rice",
            dietary: ["halal"],
            image: { src: "/images/post-5.jpg", alt: "Dragon chicken and Chinese rice order" },
            href: "https://www.instagram.com/p/DdUl98uGiqU/",
          },
        ],
      },
      {
        title: "Sweet treats",
        items: [
          {
            name: "Strawberry tres leches cake tray",
            description: "Soft milky cake with strawberry sauce. Good for 6 to 7 people.",
            price: "$40",
            image: { src: "/images/post-7.jpg", alt: "Strawberry tres leches cake" },
            href: "https://www.instagram.com/p/DcocAcekeyx/",
          },
        ],
      },
    ],
    footnote: "Strawberry tres leches tray price was posted on Instagram. Ask in your DM for current pricing on other items.",
  },

  gallery: {
    title: "Recent orders",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1439, alt: "Aloo puffs for hi tea", caption: "Aloo puffs for hi tea", href: "https://www.instagram.com/p/DecjknWGiRo/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1353, alt: "Chicken cheese sliders", caption: "Chicken cheese sliders", href: "https://www.instagram.com/p/DeFovj9Gp_z/" },
      { src: "/images/post-3.jpg", width: 1080, height: 962, alt: "Event catering spread", caption: "Event catering", href: "https://www.instagram.com/p/DdzV4u5GnLj/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "Karachi style biryani trays", caption: "Karachi style biryani", href: "https://www.instagram.com/p/Dde-KO-mopt/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1187, alt: "Desi Chinese order", caption: "Dragon chicken and Chinese rice", href: "https://www.instagram.com/p/DdUl98uGiqU/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1228, alt: "Packed order trays", caption: "From dawats to everyday cravings", href: "https://www.instagram.com/p/Dc4M1gnmr-m/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "Strawberry tres leches cake", caption: "Strawberry tres leches", href: "https://www.instagram.com/p/DcocAcekeyx/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "chatpata.karachi",
    embeds: [
      "https://www.instagram.com/p/DecjknWGiRo/",
      "https://www.instagram.com/p/DeFovj9Gp_z/",
      "https://www.instagram.com/p/Dde-KO-mopt/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage:
      "Hi Chatpata Karachi! I would like to order.\nDate needed:\nServings or tray size:\nItems (biryani, sliders, aloo puffs, cake, other):\nPickup or delivery area:\nNotes:",
    links: [],
    note: "Please place your order at least 2 days in advance so everything can be prepared fresh.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram with your date, servings, and what you would like. We will confirm details in the chat." },
    { q: "Do you cater events?", a: "Yes. We handle hi teas, dawats, and other gatherings across the GTA. Tell us your guest count and date." },
    { q: "Is the food halal?", a: "Yes. Chatpata Karachi makes homemade fresh halal food." },
    { q: "How far ahead should I order?", a: "Please place your order at least 2 days in advance so everything can be prepared fresh." },
  ],

  contact: {
    area: "Greater Toronto Area, Ontario",
    socials: [],
  },

  seo: {
    title: "Chatpata Karachi | Homemade halal catering in the GTA",
    description:
      "Homemade Karachi style halal food and event catering across the GTA. Biryani, sliders, aloo puffs, and more. Order by Instagram DM.",
    keywords: [
      "Karachi style biryani GTA",
      "halal catering Toronto",
      "hi tea catering GTA",
      "homemade desi food Brampton",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
