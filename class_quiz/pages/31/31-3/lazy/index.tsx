import LazyLoad, { lazyload } from "react-lazyload";
export const images = [
    {
        id: 1,
        src: "/lazy/01.jpeg",
    },
    {
        id: 2,
        src: "/lazy/02.jpeg",
    },
    {
        id: 3,
        src: "/lazy/03.jpeg",
    },
    {
        id: 4,
        src: "/lazy/04.jpeg",
    },
    {
        id: 5,
        src: "/lazy/05.jpeg",
    },
    {
        id: 6,
        src: "/lazy/06.jpeg",
    },
    {
        id: 7,
        src: "/lazy/07.jpeg",
    },
    {
        id: 8,
        src: "/lazy/08.jpeg",
    },
    {
        id: 9,
        src: "/lazy/09.jpeg",
    },
    {
        id: 10,
        src: "/lazy/10.jpeg",
    },
];

export default function LazyImg() {
    return (
        <>
            {images.map((el) => (
                <LazyLoad key={el.id} height={500}>
                    <img src={el.src} />
                </LazyLoad>
            ))}
        </>
    );
}
