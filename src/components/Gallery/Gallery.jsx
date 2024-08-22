import { Masonry } from "masonic";
import GalleryCard from "../GalleryCard/GalleryCard";
import styles from "./Gallery.module.scss";

const Gallery = ({ items = []}) => {
    return (
        <section className={styles.gallery}>
            <div className="container">
                <Masonry 
                    // Provides the data for our grid items
                    items={items}
                    // Adds 8px of space between the grid cells
                    columnGutter={10}
                    // Sets the minimum column width to 172px
                    columnWidth={350}
                    render={GalleryCard}
                />
            </div>
        </section>
    );
}

export default Gallery;