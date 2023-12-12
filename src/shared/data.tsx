import {
  FooterProps,
  HeroProps,
} from './types';

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      <div>
        <span>Masajes Coña</span>
      </div>
      <div>
        <span className="sm:inline-block">Guzzy - Jim</span>
      </div>

    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold ">
        Masajes con final felíz
        </span>
      </span>
     
    </>
  ),
};


export const footerData2: FooterProps = {

  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className=" h-5 w-5 rounded-sm md:-mt-0.5 md:h-6 md:w-6"></span>
      Web site made with ❤️ by{' '}
      <a target="_blank" className="text-blue-600 hover:underline dark:text-gray-200" href="https://jim-dev-portfolio.vercel.app/">
        {' '}
        JIM-DEV
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};