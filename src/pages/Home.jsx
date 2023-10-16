import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    // const fetchOfferListings = async () => {
    //   try {
    //     const res = await fetch('/api/listing/get?offer=true&limit=4');
    //     const data = await res.json();
    //     setOfferListings(data);
    //     fetchRentListings();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // const fetchRentListings = async () => {
    //   try {
    //     const res = await fetch('/api/listing/get?type=rent&limit=4');
    //     const data = await res.json();
    //     setRentListings(data);
    //     fetchSaleListings();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // const fetchSaleListings = async () => {
    //   try {
    //     const res = await fetch('/api/listing/get?type=sale&limit=4');
    //     const data = await res.json();
    //     setSaleListings(data);
    //   } catch (error) {
    //     log(error);
    //   }
    // };
    // fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
        E-commerce Focus: Ecom Express primarily caters to the e-commerce sector. It offers a wide range of logistics and supply chain services tailored to the unique needs of online retailers, helping them reach customers across India.
          <br /> <br />
          Pan-India Presence: Ecom Express has a vast network of delivery centers and hubs across India, which enables them to offer extensive coverage and reach in both urban and rural areas. This widespread presence ensures timely and extensive delivery services.
          <br /> <br />
          Last-Mile Delivery: One of Ecom Express's key strengths is its last-mile delivery capabilities. They specialize in delivering packages directly to the customer's doorstep, ensuring that e-commerce shipments reach their destination safely and on time.
          <br /> <br />
          Customized Solutions: Ecom Express understands that different businesses have unique logistics requirements. They offer tailored solutions that cater to the specific needs of their clients, whether it's related to same-day delivery, express shipping, or other special requirements.
          <br /> <br />
          Quality and Reliability: The company places a strong emphasis on the quality and reliability of its services. Ecom Express strives to provide a consistent and dependable logistics experience for both businesses and consumers.
          <br /> <br />
          Customer Support: Ecom Express typically offers customer support to address inquiries, resolve issues, and provide assistance throughout the shipping and delivery process.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
