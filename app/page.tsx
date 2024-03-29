import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import SaveTheDate from "@/components/SaveTheDate";
import SoftWater from "@/components/SoftWater";
import AboutUs from "@/components/AboutUs";
import PhotoAlbum from "@/components/PhotoAlbum";
import Invitation from "@/components/Invitation";
import Donate from "@/components/Donate";
import LoveFirstSight from "@/components/LoveFirstSight";

// @ts-ignore
export default function Home(props) {
    return (
        <>
            <Header />
            <Carousel />
            <SaveTheDate />
            <SoftWater />
            <AboutUs />
            <LoveFirstSight />
            <PhotoAlbum />
            <Invitation invitee={props.invitee} />
            <Donate />
        </>
    )
}
