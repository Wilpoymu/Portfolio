import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../public/logoNegro.png';
import design from '../public/design.png';
import code from '../public/code.png';
import web1 from '../public/Pages/MathJS-Api.png';
import web2 from '../public/Pages/QR-code.png';
import web3 from '../public/Pages/Tech-News.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Wilfer Zuluaga Portfolio</title>
        <meta name="description" content="Portfolio of Wilfer Zuluaga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="font-burtons text-xl">DevByWil</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Wilfer Zuluaga
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 text-left md:text-xl max-w-xl mx-auto">
              Web developer and designer with a combination of technical and
              creative skills. My abilities allow me to create beautiful and
              functional websites that effectively convey a brands message. I am
              always seeking to improve my skills and stay up-to-date with the
              latest technologies and trends in the industry.
            </p>
          </div>
          <div className="flex justify-center gap-10 text-5xl py-3 text-gray-600">
            <a
              href="https://www.linkedin.com/in/wilfer-zuluaga-aristizabal/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/Wilpoymu"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full overflow-hidden w-80 h-80 mt-20 md:w-96 md:h-96">
            <Image src={logo} fill alt="logo" />
          </div>
        </section>
        <section>
          <div className="lg:flex justify-between gap-10 w-100 h-100">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} alt="design-icon" />
              <h3 className="text-lg font-medium pt-8 pb-2">Designs</h3>
              <p className="py-2 text-left">
                Attractive and effective design to bring your brand to life.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use:</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} alt="code-icon" />
              <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
              <p className="py-2 text-left">
                We believe that user experience and interface are key in
                programming, and we show it in our work.
              </p>
              <h4 className="py-4 text-teal-600">Code tools I use:</h4>
              <p className="text-gray-800 py-1">HTML & CSS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row">
            <div className="basis-1/3">
              <a
                href="https://wilpoymu.github.io/Mathjs-Api/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                  responsive
                  alt="Web1"
                />
              </a>
            </div>
            <div className="basis-1/3">
              <a href="#">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                  responsive
                  alt="Web2"
                />
              </a>
            </div>
            <div className="basis-1/3">
              <a
                href="https://wilpoymu.github.io/TechNews/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                  responsive
                  alt="Web3"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
