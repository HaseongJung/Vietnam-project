import Slider from "react-slick";
import "../assets/css/slied.css";

type Images = {
  url: string;
};

type SliderImagesProps = {
  images: Images[];
};

export default function SliderImages({ images = [] }: SliderImagesProps) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="">
      {images.map((image, index) => (
        <img key={index} src={image.url} alt="" className="block h-[200px] object-cover rounded-2xl md:h-[240px] lg:h-[320px]"/>
      ))}
    </Slider>
  );
}
