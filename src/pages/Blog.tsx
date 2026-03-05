import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import templeHero from "@/assets/temple-hero.jpg";
import menorah from "@/assets/menorah.jpg";
import ark from "@/assets/ark.jpg";

const sections = [
  {
    id: "courtyards",
    title: "The Courtyards",
    image: templeHero,
    imageAlt: "Temple outer courtyard",
    content: `The Temple complex opened with a great outer courtyard, entered through massive bronze-covered gates. Beyond it lay the inner courtyard (Azarah), built from three layers of smooth stone and one layer of cedar beams — the boundary between the people and the priests. This architectural layering was deliberate: each threshold carried the worshipper deeper into holiness, further from the mundane world.`,
  },
  {
    id: "altar",
    title: "The Altar and the Bronze Sea",
    content: `At the center of the inner courtyard stood a monumental bronze altar — roughly 10m × 10m × 5m — where a perpetual fire burned day and night without cease. Nearby, the Bronze Sea (Yam shel Nechoshet), a basin 5 meters in diameter holding over 60,000 liters of water, rested upon 12 bronze oxen arranged in groups of three, facing the four directions. Ten ornate bronze basins on wheeled stands were used for the ritual purification of offerings before they were brought to the altar.`,
  },
  {
    id: "pillars",
    title: "The Two Pillars",
    content: `Two freestanding bronze pillars, each 12 meters high, flanked the entrance porch to the Temple. The right pillar was called Yachin ("He will strengthen") and the left was called Boaz ("In him is strength"). Remarkably, they bore no structural weight whatsoever — they were purely symbolic, proclaiming the divine covenant with the Davidic dynasty and the eternal covenant with Israel.`,
  },
  {
    id: "sanctuary",
    title: "The Sanctuary (Heichal)",
    image: menorah,
    imageAlt: "The Golden Menorah of the Sanctuary",
    content: `The main hall — 21m long, 10m wide, and 16m high — was lined entirely in cedarwood and overlaid with the finest gold. It housed ten golden menorot (candelabras), though only Moses' original Menorah was lit each evening. Ten golden tables held the Showbread, yet only Moses' original table held the 12 loaves (Lechem HaPanim), which, according to tradition, miraculously remained fresh for seven days. The Golden Incense Altar was burned twice daily with a secret eleven-ingredient blend known only to the Avtinas family.`,
    list: [
      "10 golden menorot — only Moses' original Menorah was lit",
      "10 golden tables — only Moses' table held the miraculous 12 loaves",
      "The Golden Incense Altar — a secret 11-ingredient blend burned twice daily",
    ],
  },
  {
    id: "holies",
    title: "The Holy of Holies (Kodesh HaKodashim)",
    content: `A perfect cube — 10.5m × 10.5m × 10.5m — with no windows, its walls and floor covered entirely in gold. Two cherubim (Keruvim) of olive wood, each five meters tall, stood within with wings extended and touching across the width of the room. They were separated from the Sanctuary by the Parochet — a curtain woven from 72 threads, each thread itself twisted from 24 individual threads, making it effectively impenetrable. Only the High Priest (Kohen Gadol) was permitted to enter this room, and only once a year — on Yom Kippur, the Day of Atonement.`,
  },
  {
    id: "ark",
    title: "The Ark of the Covenant",
    image: ark,
    imageAlt: "The Ark of the Covenant",
    content: `At the heart of the Holy of Holies rested the Aron HaBrit — the Ark of the Covenant — containing the two stone Tablets of the Law given to Moses at Sinai. Atop the Ark rested the golden cover (Kapporet), from which two golden Keruvim with childlike faces and eagle-like wings spread outward in an embrace. It is from the space between these wings, say the sages, that "the spiritual life of the world emanated" — the place where the voice of the Divine spoke to Moses.`,
    quote: "From it, say the sages, 'emanated the spiritual life of the world.'",
  },
  {
    id: "destruction",
    title: "Destruction & Hidden Treasures",
    content: `In 586 BCE — the year 3,338 in the Hebrew calendar — Nebuchadnezzar's Babylonian army breached the walls of Jerusalem and destroyed the Temple on the 9th of Av (Tisha B'Av), a date that would become forever marked by national mourning. According to tradition, King Josiah had foreseen the catastrophe and, in advance, hidden the Ark of the Covenant, the original Menorah, and the miraculous jar of manna — concealing them in an underground passage beneath the Temple Mount, where they await the time of ultimate redemption.`,
  },
  {
    id: "third-temple",
    title: "The Third Temple",
    content: `The great medieval sage Maimonides (Rambam) writes that the Messiah will rebuild the Temple and gather the scattered of Israel from their exile. The Midrash teaches something more mystical still: that the Third Temple has already been completed in Heaven, fashioned from divine light, and will one day descend to the earth. The prophet Zechariah proclaims the ultimate vision: "On that day, the Eternal One will be One and His name will be One."`,
    quote: "\"On that day, the Eternal One will be One and His name will be One.\" — Zechariah 14:9",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Article Header ── */}
      <header
        className="relative pt-40 pb-20 px-4 text-center bg-temple-midnight overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to bottom, hsl(222 40% 7%), hsl(222 38% 12%))` }}
      >
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${templeHero})` }}
        />
        <div className="absolute inset-0 bg-temple-midnight/80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-temple-gold/60 hover:text-temple-gold font-ui text-xs uppercase tracking-widest mb-8 transition-colors">
            ← Back to Home
          </Link>
          <p className="font-ui text-temple-gold uppercase tracking-[0.3em] text-xs mb-4">Featured Article</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-temple-on-dark leading-tight mb-6">
            Solomon's Temple: Architecture, Sacred Objects & the Promise of the Third Temple
          </h1>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <div className="flex flex-wrap items-center justify-center gap-4 text-temple-on-dark/50 font-ui text-xs uppercase tracking-wider">
            <span>By the Beit HaMikdash Editorial Team</span>
            <span className="text-temple-gold/30">·</span>
            <span>March 2025</span>
            <span className="text-temple-gold/30">·</span>
            <span>12 min read</span>
          </div>
        </div>
      </header>

      {/* ── Article Body ── */}
      <article className="container max-w-3xl px-4 py-16">
        {/* Intro */}
        <div className="prose-temple mb-12 pb-10 border-b border-border">
          <p className="text-xl font-body leading-relaxed text-foreground/90 italic">
            Around 950 BCE, on Mount Moriah in Jerusalem — the same rock where Abraham was tested and creation is said to have begun — King Solomon built the First Temple. Seven years of construction, cedarwood from Lebanon, and stone shaped in secret (so that no hammer rang on the Temple Mount) produced one of the ancient world's most sacred structures.
          </p>
        </div>

        {/* Sections */}
        {sections.map((sec, i) => (
          <div key={sec.id} id={sec.id} className="mb-16">
            <div className="prose-temple">
              <h2>{sec.title}</h2>
              {sec.image && (
                <div className={`my-8 rounded overflow-hidden border border-border shadow-sm ${i % 2 === 0 ? "float-right ml-8 mb-4 w-full md:w-80" : "float-left mr-8 mb-4 w-full md:w-80"} clear-both md:clear-none`}>
                  <img src={sec.image} alt={sec.imageAlt} className="w-full object-cover" />
                  <p className="text-xs text-muted-foreground text-center py-2 px-3 bg-muted font-ui">{sec.imageAlt}</p>
                </div>
              )}
              <p>{sec.content}</p>
              {sec.list && (
                <ul>
                  {sec.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {sec.quote && (
                <blockquote>{sec.quote}</blockquote>
              )}
            </div>
            <div className="clear-both" />
            {i < sections.length - 1 && <div className="gold-divider w-12 mt-10 opacity-40" />}
          </div>
        ))}

        {/* Closing */}
        <div className="mt-8 p-8 bg-temple-midnight rounded border border-temple-gold/20 text-center">
          <div className="text-temple-gold text-2xl mb-4">✦</div>
          <p className="font-display text-temple-on-dark italic text-lg leading-relaxed mb-4">
            The Temple was destroyed, but its memory was never extinguished. Every year, Jews around the world turn toward Jerusalem and whisper the same ancient hope: <em className="text-temple-gold">l'shanah ha-ba'ah bi'Yerushalayim</em> — "Next year in Jerusalem."
          </p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Blog;
