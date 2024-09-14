export const LanguageSection = () => {
  return (
    <section className='flex items-center justify-center pb-16'>
      <div className=" font-extrabold text-base md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
        Proficient in several languages: <span className="text-emerald-300 inline-flex flex-col h-[calc(theme(fontSize.base)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
              <li>Javascript</li>
              <li>Python</li>
              <li>Matlab</li>
              <li>Java</li>
              <li aria-hidden="true">Javascript</li>
          </ul>
        </span></div>
    </section>
  );
};
