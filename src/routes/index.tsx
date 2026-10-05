import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import sundarbansHero from "@/assets/sundarbans-hero.jpg";
import saintMartin from "@/assets/saint-martin.jpg";
import paharpur from "@/assets/paharpur.jpg";
import boatRiver from "@/assets/boat-river.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Travel in Bangladesh — Beauty, History & Tradition of the Delta",
      },
      {
        name: "description",
        content:
          "Journey through Bangladesh: the Sundarbans mangroves, Cox's Bazar's endless beach, Sylhet's tea gardens, ancient mosques and living Bengali traditions.",
      },
      {
        property: "og:title",
        content: "Travel in Bangladesh — Where Rivers Bloom into Paradise",
      },
      {
        property: "og:description",
        content:
          "From the emerald mangroves of the Sundarbans to the coral shores of Saint Martin's — discover the beauty, history and living traditions of Bangladesh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Heritage", href: "#heritage" },
  { label: "Tours", href: "#tours" },
];

const highlights = [
  {
    tag: "Nature",
    tagClass: "bg-jade/10 text-jade",
    title: "Cox's Bazar",
    body: "The world's longest natural sea beach, stretching 120km of golden sand.",
  },
  {
    tag: "Heritage",
    tagClass: "bg-gold/15 text-gold",
    title: "Bagerhat",
    body: "The Sixty Dome Mosque, a UNESCO-listed marvel of 15th-century sultanate design.",
  },
  {
    tag: "Tradition",
    tagClass: "bg-mint/15 text-mint",
    title: "Sylhet Tea Trails",
    body: "Rolling emerald gardens, hillside villages, and the mist of the tea estates.",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/55 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-jade font-display text-lg font-semibold text-white shadow-sm shadow-jade/30">
            T
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Travel <span className="text-jade">in Bangladesh</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-jade"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#plan"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition hover:bg-jade"
        >
          Plan your trip
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-16 pb-10">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-jade/20 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-jade backdrop-blur">
            The land of rivers
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Where rivers <span className="italic text-jade">bloom</span> into
            paradise.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            From the emerald mangroves of the Sundarbans to the turquoise
            waters of Saint Martin's Island — journey through the beauty,
            history, and living traditions of Bangladesh.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#destinations"
              className="rounded-full bg-jade px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-jade/30 transition hover:bg-ink"
            >
              Explore destinations
            </a>
            <a
              href="#heritage"
              className="rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-semibold text-ink backdrop-blur transition hover:border-jade/40"
            >
              Walk through history
            </a>
          </div>
          <div className="mt-10 flex gap-8">
            <div>
              <div className="font-display text-3xl font-semibold text-jade">
                700+
              </div>
              <div className="text-sm text-ink-soft">Rivers &amp; islands</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-jade">
                3
              </div>
              <div className="text-sm text-ink-soft">
                World heritage sites
              </div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-jade">
                1,000
              </div>
              <div className="text-sm text-ink-soft">Years of history</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative rounded-[2rem] border border-white/70 bg-white/45 p-4 shadow-2xl shadow-jade/10 backdrop-blur-2xl">
            <img
              src={sundarbansHero}
              alt="Aerial view of the Sundarbans mangrove delta at golden hour"
              width={1200}
              height={860}
              className="aspect-[16/11] w-full rounded-3xl object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-64 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-xl shadow-ink/10 backdrop-blur-xl">
              <div className="font-display text-lg font-semibold">
                Sundarbans
              </div>
              <div className="text-sm text-ink-soft">
                Largest mangrove forest on Earth
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-gold">
                ★★★★★{" "}
                <span className="text-ink-soft">4.9 · 2,300 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section id="destinations" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-10">
      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/70 bg-white/55 p-6 backdrop-blur-xl"
          >
            <div
              className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.tagClass}`}
            >
              {item.tag}
            </div>
            <h3 className="font-display text-2xl font-semibold">
              {item.title}
            </h3>
            <p className="mt-2 text-ink-soft">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section
      id="heritage"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12"
    >
      <div className="rounded-[2rem] border border-white/70 bg-white/50 p-8 shadow-xl shadow-jade/5 backdrop-blur-2xl md:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={paharpur}
            alt="The ruins of Paharpur monastery at sunset"
            width={752}
            height={896}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover"
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Heritage &amp; history
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              A walkable memory of six centuries.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Bengal's dynasties wrote themselves in brick. The Sixty Dome
              Mosque of Bagerhat has held the light since the 15th century;
              the terracotta monastery of Paharpur rises from northern plains;
              and Sonargaon's old capital still whispers of the river-merchant
              age. Visit slowly — the stories live in courtyards, crafts, and
              the hands that keep them.
            </p>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              <li className="flex items-baseline gap-4 py-4">
                <span className="font-display text-2xl font-semibold text-jade">
                  8th c.
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">
                  Somapura Mahavihara rises at Paharpur — today a UNESCO World
                  Heritage Site.
                </span>
              </li>
              <li className="flex items-baseline gap-4 py-4">
                <span className="font-display text-2xl font-semibold text-jade">
                  15th c.
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">
                  The Sixty Dome Mosque is built in Bagerhat — 77 domes of
                  Sultanate brick.
                </span>
              </li>
              <li className="flex items-baseline gap-4 py-4">
                <span className="font-display text-2xl font-semibold text-jade">
                  1600s
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">
                  Sonargaon flourishes as Bengal's capital of river trade and
                  muslin.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const tours = [
  {
    image: saintMartin,
    alt: "Turquoise water and palm trees at Saint Martin's Island",
    duration: "4 days · 3 nights",
    title: "Saint Martin's Island Escape",
    body: "Coral shores, crystal shallows, and the quiet of Bangladesh's only coral island.",
    price: "$320",
  },
  {
    image: boatRiver,
    alt: "Traditional country boat on a river at sunrise",
    duration: "3 days · 2 nights",
    title: "Delta Rivers & Villages",
    body: "Drift the waterways of old Bengal — wooden boats, weaving villages, and riverside breakfasts.",
    price: "$240",
  },
];

function Tours() {
  return (
    <section id="tours" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12">
      <div className="rounded-[2rem] border border-white/70 bg-white/50 p-8 shadow-xl shadow-jade/5 backdrop-blur-2xl md:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Curated journeys
            </h2>
            <p className="mt-2 text-ink-soft">
              Handcrafted itineraries across the delta, the coast, and the
              hills.
            </p>
          </div>
          <a href="#plan" className="text-sm font-semibold text-jade hover:underline">
            View all tours →
          </a>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="grid overflow-hidden rounded-3xl border border-white/70 bg-white/60 backdrop-blur-xl sm:grid-cols-2"
            >
              <img
                src={tour.image}
                alt={tour.alt}
                width={752}
                height={896}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {tour.duration}
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold">
                  {tour.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{tour.body}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-jade">
                    {tour.price}
                  </span>
                  <a
                    href="#plan"
                    className="text-sm font-semibold text-ink hover:text-jade"
                  >
                    Book now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      id="plan"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-12"
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 backdrop-blur-2xl">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Let's plan your delta adventure.
            </h2>
            <p className="mt-3 text-ink-soft">
              Tell us where you dream of going and our local guides will craft
              a journey just for you.
            </p>
            {submitted ? (
              <p className="mt-6 rounded-2xl bg-jade/10 px-5 py-4 text-sm font-semibold text-jade">
                Thank you! We'll be in touch with trip ideas for {email}.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-full border border-ink/10 bg-white/70 px-5 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/60 focus:border-jade/50"
                  placeholder="Your email address"
                />
                <button
                  type="submit"
                  className="rounded-full bg-jade px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-jade/30 transition hover:bg-ink"
                >
                  Get ideas
                </button>
              </form>
            )}
          </div>
          <img
            src={boatRiver}
            alt="A country boat gliding down a river at sunrise"
            width={928}
            height={720}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink-soft md:flex-row">
        <span className="font-display text-lg font-semibold text-ink">
          Travel in Bangladesh
        </span>
        <span>© 2026 · Discover the beauty of the delta</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream font-sans text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-sand" />
        <div className="absolute -left-28 top-10 size-[30rem] animate-drift rounded-full bg-mint/25 blur-[120px]" />
        <div className="absolute -right-24 top-24 size-[26rem] animate-floaty rounded-full bg-jade/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 size-[28rem] animate-drift-slow rounded-full bg-gold/15 blur-[130px]" />
      </div>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Heritage />
        <Tours />
        <PlanCTA />
      </main>
      <Footer />
    </div>
  );
}
