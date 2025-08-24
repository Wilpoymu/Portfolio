import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';

import logo from '../public/logoNegro.png';
import design from '../public/design.png';
import code from '../public/code.png';

const projects = [
  {
    href: 'https://wilpoymu.github.io/Mathjs-Api/',
    image: '/Portfolio/Pages/MathJS-Api.png',
    title: 'MathJS API',
    desc: 'React + API consumption. Clean UI and input validation.',
  },
  {
    href: 'https://wilpoymu.github.io/QR-code/',
    image: '/Portfolio/Pages/QR-code.png',
    title: 'QR Code',
    desc: 'Simple generator. Focus on UX and responsiveness.',
  },
  {
    href: 'https://wilpoymu.github.io/TechNews/',
    image: '/Portfolio/Pages/Tech-News.png',
    title: 'Tech News',
    desc: 'API news feed with cards and hover states.',
  },
];

export default function Home(): React.JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Wilfer Zuluaga | Frontend Developer</title>
        <meta
          name="description"
          content="Frontend portfolio of Wilfer Zuluaga (React/Next.js, UI-focused)"
        />
        <meta
          property="og:title"
          content="Wilfer Zuluaga | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Portfolio: React, Next.js, Tailwind, UI/UX, projects and contact."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-zinc-950 dark:text-zinc-100 px-6 md:px-12 lg:px-24">
        <header className="py-8 mb-8 flex justify-between items-center">
          <h1 className="font-burtons text-xl" aria-label="Brand">
            DevByWil
          </h1>
          <nav className="flex items-center gap-6">
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded hover:opacity-80"
            >
              <BsFillMoonStarsFill className="text-2xl" />
            </button>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
              href="/Portfolio/cv/Wilfer_Zuluaga_CV_2025-08.pdf"
              download
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </header>

        <section className="text-center p-6">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Wilfer Zuluaga
          </h2>
          <p className="text-lg md:text-xl text-gray-800 dark:text-zinc-300 mt-2">
            Frontend Developer (React/Next.js) — UI‑minded & Agile/Scrum.
          </p>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-zinc-300 max-w-2xl mx-auto">
            I craft clean, accessible UIs with modern stacks. Strong focus on
            component architecture, performance and DX. English C1. Open to
            collaboration.
          </p>

          <div className="flex justify-center gap-8 text-4xl py-3 text-gray-600 dark:text-zinc-300">
            <a
              href="https://co.linkedin.com/in/wilfer-zuluaga-aristizabal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/Wilpoymu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <AiFillGithub />
            </a>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full overflow-hidden w-56 h-56 md:w-72 md:h-72 mt-10">
            <Image
              src={logo}
              alt="Personal logo"
              fill
              priority
              sizes="(max-width: 768px) 224px, 288px"
            />
          </div>
        </section>

        <section aria-labelledby="skills" className="mt-8">
          <h3 id="skills" className="text-3xl py-1">
            What I do
          </h3>
          <div className="lg:flex justify-between gap-10">
            <article className="text-center shadow-lg p-8 rounded-xl my-8 bg-white dark:bg-zinc-900">
              <Image src={design} width={96} height={96} alt="Design icon" />
              <h4 className="text-lg font-medium pt-6 pb-2">Designs</h4>
              <p className="py-2 text-left">
                Attractive and effective UI to bring your brand to life.
              </p>
              <p className="py-1">Tools: Photoshop · Illustrator · Figma</p>
            </article>

            <article className="text-center shadow-lg p-8 rounded-xl my-8 bg-white dark:bg-zinc-900">
              <Image src={code} width={96} height={96} alt="Code icon" />
              <h4 className="text-lg font-medium pt-6 pb-2">Frontend Code</h4>
              <p className="py-2 text-left">
                Component-driven, accessible and performant interfaces.
              </p>
              <p className="py-1">
                Stack: HTML/CSS · JavaScript/TypeScript · React/Next.js ·
                Tailwind
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="portfolio" className="mt-4">
          <h3 id="portfolio" className="text-3xl py-1">
            Portfolio
          </h3>

          <div className="grid gap-8 py-8 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.href} className="group mb-8">
                <Link href={p.href} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                      src={p.image}
                      alt={`Screenshot: ${p.title}`}
                      fill
                      sizes="(max-width:1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <h4 className="mt-3 font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-600 dark:text-zinc-400">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-10 text-sm text-center text-gray-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Wilfer Zuluaga
        </footer>
      </main>
    </div>
  );
}
