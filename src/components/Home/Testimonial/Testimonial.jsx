import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const Testimonial = () => {
  return (
    <>
      <div className="px-4">
        <div className="max-w-[691px] mx-auto text-center pt-8 md:pt-16 font-kurale">
          <h1 className="text-lg md:text-3xl text-red-900 font-serif dark:text-slate-200 text-opacity-100 dark:text-opacity-100">
            Testimonial
          </h1>
          <p className="text-lg md:text-4xl font-black dark:text-slate-200 text-opacity-100 dark:text-opacity-100 font-Inter pt-5 pb-2">
            Our Best Creations in One Inspiring Review
          </p>
        </div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            641: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          // slidesPerView={1}
          spaceBetween={40}
          freeMode={true}
          centeredSlides={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper my-8"
        >
          <SwiperSlide className="mb-12">
            <div className="swiper-slide">
              <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                <div className="">
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-semibold text-indigo-600">
                      5.0
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    This artwork turned out amazing! The colors blended
                    perfectly, and the steps were easy to follow. I’ll
                    definitely be trying more pieces like this!
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="https://pagedone.io/asset/uploads/1696229969.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                      Jane D
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <div className="swiper-slide">
              <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                <div className="">
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    I’m so pleased with how my creation turned out! The process
                    was easy to follow, and the end result exceeded my
                    expectations. I’ll definitely be recommending this to my
                    friends!
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="https://pagedone.io/asset/uploads/1696229969.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                      Jane D
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <div className="swiper-slide">
              <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                <div className="">
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-semibold text-indigo-600">
                      5.0
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    This painting technique was fantastic! The process was easy
                    to understand, and the end result looks amazing. It is
                    definitely going on my wall!
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="https://pagedone.io/asset/uploads/1696229969.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">
                      Melon Sha
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <div className="swiper-slide">
              <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                <div className="">
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-semibold text-indigo-600">
                      5.0
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    I loved this DIY craft project! The materials were easy to
                    work with, and the final piece turned out beautifully. I’ll
                    definitely be making more!
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="https://pagedone.io/asset/uploads/1696229969.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                      Jon Doe
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-12">
            <div className="swiper-slide">
              <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                <div className="">
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-semibold text-indigo-600">
                      5.0
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    This craft kit was incredible! The instructions were clear,
                    and the materials were high-quality. I’m thrilled with how
                    my project turned out, and I can’t wait to try another!
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="https://pagedone.io/asset/uploads/1696229969.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                      Broun
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
