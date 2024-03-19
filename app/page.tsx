import ResponsiveImage from "@/components/Hero";
import Carousel from '@/components/CarouselProps';
import CallBack from "@/components/CallBack";
import PopupForm from "@/components/PopupForm";
import ContactForm from "@/components/ContactForm";
import VerticalCardList from "@/components/VerticalCardList";
import LocationBanner from "@/components/LocationBanner";
import About from "@/components/About";
import Banner from "@/components/Banner"
require('dotenv').config();
const cards = [
  { imageUrl: '/img1.jpeg' },
  { imageUrl: '/img2.jpeg'},
  { imageUrl: '/img3.jpeg'},
  { imageUrl: '/img4.jpeg'},
  { imageUrl: '/img5.jpeg'},
  { imageUrl: '/img6.jpeg'},
  { imageUrl: '/img8.jpeg'},
  { imageUrl: '/img9.jpeg'},
  { imageUrl: '/img10.jpeg'},
  { imageUrl: '/img11.jpeg'},
  { imageUrl: '/img12.jpeg'},
  { imageUrl: '/img13.jpeg'},
  { imageUrl: '/img14.jpeg'},
  { imageUrl: '/img15.jpeg'},
  { imageUrl: '/img16.jpeg'},
  { imageUrl: '/img17.jpeg'},
  { imageUrl: '/img18.jpeg'},
];

const verticalCards = [
  {
    image: '/image1.png',
    title: '5BHK CLUSTER LAYOUT PLAN',
    description: '',
  },
  {
    image: '/image2.png',
    title: 'SITE LAYOUT PLAN',
    description: '',
  },
  {
    image: '/image3.png',
    title: '4BHK SINGLE UNIT LAYOUT PLAN',
    description: '',
  },
  // Add more cards as needed
];


const imageSrc = '/pin.png'; // Replace with your image URL

const imageSrc1 = '/hero.webp'; // Replace with your image URL
const content = 'Your content goes here'; // Replace with your content

export default function Home() {
  return (
    <>
      <ResponsiveImage />
      <Banner/>
      <About/>
      <CallBack
        title="Schedule your next visit"
        text="Get more details about this property!"
        buttonText="Let Us Contact You"
        buttonLink="#" // Replace with your desired link
      />
      {/* <Hero/> */}
      <Carousel cards={cards} />
      <ContactForm />
      <PopupForm />
      <VerticalCardList cards={verticalCards} />
      <LocationBanner imageSrc={imageSrc} content="visit us!" />
    </>
  )
}

