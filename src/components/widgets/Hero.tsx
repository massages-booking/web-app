import { HeroProps } from "@/shared/types";



const Hero = (props: { data: HeroProps }) => {
  const { title, subtitle } = props.data;

  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="py-4 md:py-15">
          
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-5xl font-bold tracking-tighter md:text-6xl">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
