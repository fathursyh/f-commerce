type Carousel = {
    image: string
};
type Props = {
    classList: string;
    data: Carousel[]
};
export default function HomeCarousel({ classList, data } : Props) {
    return (
        <div id="carousel" className={"carousel rounded-box h-full " + classList} >
            {
                data.map((item) =>
                    <div className="carousel-item" key={item.image}>
                        <img
                            src={item.image}
                            alt="Burger" className="w-96 h-full object-cover" />
                    </div>
                )
            }
        </div>
    );
}