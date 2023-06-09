import Authenticated from "@/Layouts/Authenticated/Index.jsx";
import Flickity from "react-flickity-component";
import {Head} from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie.jsx";
import MovieCard from "@/Components/MovieCard.jsx";

export default function Dashboard() {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }
    return <Authenticated>
        <Head title={"Dashboard"}>
            <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"/>
        </Head>
            <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
            <Flickity className="gap-[30px]" options={flickityOptions}>
                {[1, 2, 3, 4].map(i => (
                    <FeaturedMovie
                        key={i}
                        slug="Test"
                        name={"Test " + i}
                        category="Test"
                        thumbnail={"https://picsum.photos/520/340?random=" + i}
                        rating={i}
                    />
                ))}
            </Flickity>

           <div className="mt-[50px]">
               <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
               <Flickity className="gap-[30px]" options={flickityOptions}>
                     {[1, 2, 3, 4, 5, 6].map(i => (
                        <MovieCard
                            key={i}
                            slug="Test"
                            name={"Test " + i}
                            category="Test"
                            thumbnail={"https://picsum.photos/520/340?random=" + (i + i)}
                            rating={i}
                        />
                    ))}
               </Flickity>
           </div>

    </Authenticated>;
}
