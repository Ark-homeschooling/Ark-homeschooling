# Ark Homeschooling — Website

A Next.js 14 (App Router) + Tailwind CSS website for Ark Homeschooling, built
around the "sailing into a world of wonder and learning" brand from your
poster: cream/teal/coral palette, custom SVG illustrations (ark boat, whale,
clouds, waves), and a warm, playful, kid-friendly feel.

## Pages

- `/` — Home (hero, Who We Are, What We Do, Why Ark, CTA)
- `/about` — Who We Are + Meet Your Educator (Teacher Farida) + email enquiry form
- `/services` — Services offered (in-person, online, consultation, assessments, holiday programs, parent coaching)
- `/curriculum` — CBC / Cambridge / IB / British blend + digital literacy
- `/contact` — Phone, email, socials, and a quick-message form that opens
  WhatsApp with the message pre-filled (no backend/database — nothing is
  stored, it just opens `wa.me` like a mailto link)

## Before you deploy — things to update

1. **Formspree endpoint (enquiry form on the About page)** — open
   `src/components/EnquiryForm.tsx` and replace `FORMSPREE_ENDPOINT` with
   your real form URL:
   - Go to https://formspree.io and create a free account.
   - Create a new form, set the delivery email to
     `thearkhomeschooling@gmail.com` (or whichever inbox you want).
   - Copy the endpoint it gives you (looks like
     `https://formspree.io/f/abcdwxyz`) and paste it in place of
     `https://formspree.io/f/YOUR_FORM_ID`.
   - That's it — no backend code or API keys needed. Formspree's free tier
     covers up to 50 submissions/month.
2. **Social media links** — open `src/components/SocialIcons.tsx` and
   replace the three `href: "#"` placeholders with your real Facebook,
   Instagram, and YouTube page URLs.
3. **WhatsApp number** — currently set to `+254 759 897 106` (Teacher
   Farida) in `src/components/WhatsAppButton.tsx`, `src/app/page.tsx`,
   `src/app/services/page.tsx`, `src/app/curriculum/page.tsx`, and
   `src/app/contact/page.tsx`.
4. **Photo of Teacher Farida** — the About page currently shows a "TF"
   monogram placeholder instead of a real photo (I don't use real people's
   photos without one being supplied). Drop a photo into `/public` and swap
   the placeholder `<div>` in `src/app/about/page.tsx` for an `<Image />`.
5. **Favicon/logo** — replace `src/app/favicon.ico` with your own if you'd
   like a custom browser tab icon.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Note: the headings font (Fredoka) and body font (Quicksand) load from
Google Fonts at build time, so you'll need an internet connection when you
run `npm run build` or `npm run dev` for the first time — same as any
Next.js project using `next/font/google`.

## Deploying

Same flow you used for Rubani Hub:

```bash
npm install -g vercel   # if not already installed
vercel
```

Or connect the GitHub repo to Vercel for automatic deployments on every
push.

## Structure

```
src/
  app/
    layout.tsx        -> fonts, nav, footer, WhatsApp button wrap every page
    page.tsx           -> Home
    about/page.tsx      -> About & Educator + enquiry form
    services/page.tsx   -> Services offered
    curriculum/page.tsx -> Curriculum
    contact/page.tsx    -> Contact
    globals.css         -> brand colors as Tailwind utilities + button styles
  components/
    Navbar.tsx, Footer.tsx, WhatsAppButton.tsx, SocialIcons.tsx
    EnquiryForm.tsx      -> email enquiry form (posts to Formspree)
    ArkBoat.tsx, Whale.tsx, Cloud.tsx, CloudsLayer.tsx  -> custom illustrations
    WaveDivider.tsx, InfoCard.tsx, SectionHeading.tsx, PageHero.tsx
    icons/BrandIcons.tsx -> custom Facebook/Instagram/YouTube SVG icons
tailwind.config.ts       -> brand colors (cream, teal, coral, ink, gold...)
                             and animations (float, bob, drift)
```
