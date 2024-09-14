export const SectionHeader = ({
    title,
    eyebrow,
    description
}:{
    title:string,
    eyebrow:string,
    description:string
}) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradien-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                {eyebrow}
                </p>
            </div>
            <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl ">
                {title}
            </h2>
            <p className="text-center md:text-lg max-w-md mx-auto mt-4 text-white/60 lg:text-xl">
                {description}
            </p>
        </>
    );
};