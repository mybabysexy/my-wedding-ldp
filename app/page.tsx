import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import SaveTheDate from "@/components/SaveTheDate";
import SoftWater from "@/components/SoftWater";
import AboutUs from "@/components/AboutUs";
import PhotoAlbum from "@/components/PhotoAlbum";
import Invitation from "@/components/Invitation";
import Donate from "@/components/Donate";

export default function Home() {
    return (
        <main>
            <Header />
            <Carousel />
            <SaveTheDate />
            <SoftWater />
            <AboutUs />
            <PhotoAlbum />
            <Invitation />
            <Donate />
        </main>
    )
}
