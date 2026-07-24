/*
  CONTENT MANAGEMENT
  ------------------
  Add new books at the TOP of the books array.
  Work-history entries are managed in _data/work_history.yml.

  The home page automatically shows:
    - the first 2 books

  Articles are now managed as Markdown files inside the _posts folder.
*/
window.PORTFOLIO_CONTENT = {
  articles: [],

  books: [
    /*
    {
      title: "MM",
      series: "Classified · Book One",
      year: "2026",
      published: "2026-07-01",
      description:
        "Placeholder text because it's a secret.",
      amazonUrl: "https://www.amazon.com/dp/YOUR_ASIN",
      detailsUrl: "#",
      cover: "assets/images/book-placeholder-mirror-moon.svg",
      coverAlt: "Placeholder cover for MM",
      rating: 4.7,
      reviewCount: 28
    },
    */
    {
      title: "Ancient Legacy",
      series: "Flesh and Steel · Book Three",
      year: "2014",
      published: "2014-12-30",
      description:
        "Thousands of Imperial ships are waiting in Talam’s orbit. The end of the millennia-old war draws near, and the Bions face extinction. An ancient weapon, hidden somewhere near the northern pole, is believed to be the key to stopping the Cyon invasion. Yet for as long as the war has raged, other Bions have attempted to find the weapon and failed. And this time, the Bions are not the only ones searching for it. After the attack on Palatine, the true emperor tends to his wounded world and prepares to reclaim his empire and bring his people back.",
      amazonUrl: "https://www.amazon.com/Ancient-Legacy-Flesh-Steel-Book-ebook/dp/B00RNE4APC",
      detailsUrl: "#",
      cover: "assets/images/ancientlegacy.jpg",
      coverAlt: "Ancient Legacy",
      rating: 3.6,
      reviewCount: 5
    },
    {
      title: "First Assault",
      series: "Flesh and Steel · Book Two",
      year: "2014",
      published: "2014-02-28",
      description:
        "Emperor Titus is dead, and a usurper has claimed the throne. With an empire-wide broadcast, he revealed his plans – the ceasefire with the Bion tribes is no longer in effect, and the final battle is about to begin. Far from the capital, the true emperor is still in hiding. He knows that the final clash between the rivaling civilizations will devastate the Empire. He has to claim the throne and stop the slaughter before it is too late. But that is not an easy task for a man without a body and with limited resources. Meanwhile, in the shadows, the mysterious sect is growing in number…",
      amazonUrl: "https://www.amazon.com/gp/product/B00IPUM3OS",
      detailsUrl: "#",
      cover: "assets/images/firstassault.jpg",
      coverAlt: "First Assault",
      rating: 4.0,
      reviewCount: 25
    },
    {
      title: "Silent Rising",
      series: "Flesh and Steel · Book One",
      year: "2013",
      published: "2013-10-11",
      description:
        "For millennia, two rival civilizations – the Cyon Empire and the Bion tribes – have been locked in a merciless war that has left their worlds in ruins. For the last fifty years, their hostilities have decreased, but both sides know the war isn’t over yet and that the final battle is close at hand. However, something stirs in the depths of their worlds. A new force is rising that threatens to annihilate both civilizations. On one side of the front, a broken Cyon will stop at nothing to reclaim what he’s lost. On the other side, a convicted Bion is forced to undertake a mission that will end the war. The future of both worlds now lies in their hands.",
      amazonUrl: "https://www.amazon.com/Silent-Rising-Flesh-Steel-Book-ebook/dp/B00FTHAMAM",
      detailsUrl: "#",
      cover: "assets/images/silentrising.jpg",
      coverAlt: "Silent Rising",
      rating: 3.7,
      reviewCount: 95
    }
  ]
};
