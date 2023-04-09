import {
  DotsCircleHorizontalIcon,
  SpeakerphoneIcon,
  WifiIcon,
  XIcon,
} from '@heroicons/react/outline';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Example() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative py-4 bg-black  h-screen overflow-hidden">
      {/* Top piece */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pb-4">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <p className="ml-3 font-semibold text-lg text-white truncate">
              Done
            </p>
          </div>

          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <DotsCircleHorizontalIcon
                className="h-8 w-8 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Slider {...settings}>
          <div className="bg-gray-800 ">
            <div className="flex align-baseline justify-between flex-wrap relative p-4">
              <div className="blackCircle"></div>

              <div className="w-0 flex-1 flex items-baseline align-baseline">
                <p className=" font-semibold italic text-lg text-white truncate">
                  ticketmaster
                </p>
              </div>

              <div className="flex flex-col text-right">
                <span className="font-semibold text-xs text-blue-300 ">
                  6:00 PM
                </span>
                <span className=" font-normal text-2xl  text-white ">
                  {' '}
                  Apr 8,2023
                </span>
              </div>
            </div>
            <div className="bg-blue-600 mx-auto text-9xl font-extrabold text-white italic items-center  justify-center grid justify-items-center">
              t
            </div>

            <div className="flex flex-col text-left p-4">
              <div className="flex flex-col text-left">
                <span className=" font-light  text-blue-300 uppercase">
                  KASEYA CENTER (FORMERLY KNOWN AS MIAMI-DADE ARENA)
                </span>
                <span className=" font-light   text-white ">
                  UFC 287 Miami
                </span>
              </div>
              <div className="flex flex-row text-left justify-between  pt-2">
                <div className="flex flex-col text-left">
                  <span className=" font-light uppercase  text-blue-300 ">
                    Section
                  </span>
                  <span className=" font-light uppercase   text-white ">
                    105
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <span className=" font-light uppercase  text-blue-300 ">
                    Row
                  </span>
                  <span className=" font-light uppercase   text-white ">5</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className=" font-light uppercase  text-blue-300 ">
                    Seat
                  </span>
                  <span className=" font-light uppercase   text-white ">
                    24{' '}
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left pt-2 pb-24">
                <span className=" font-light text-xs  text-blue-300 uppercase">
                  Entry Info
                </span>
                <span className=" font-light   text-white uppercase">
                  UPPER LEVEL
                </span>
              </div>

              <div className="items-baseline grid justify-items-end ">
                <WifiIcon
                  className="h-8 w-8 text-gray-400 transform rotate-90"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>{' '}
          <div className="bg-gray-800">
            <div className="flex align-baseline justify-between flex-wrap relative p-4">
              <div className="blackCircle"></div>

              <div className="w-0 flex-1 flex items-baseline align-baseline">
                <p className=" font-semibold italic text-lg text-white truncate">
                  ticketmaster
                </p>
              </div>

              <div className="flex flex-col text-right">
                <span className="font-semibold text-xs text-blue-300 ">
                  7:30 PM
                </span>
                <span className=" font-normal text-2xl  text-white ">
                  {' '}
                  Nov 1,2021
                </span>
              </div>
            </div>
            <div className="bg-blue-600 mx-auto text-9xl font-extrabold text-white italic items-center  justify-center grid justify-items-center">
              t
            </div>

            <div className="flex flex-col text-left p-4">
              <div className="flex flex-col text-left">
                <span className=" font-light  text-blue-300 uppercase">
                  Madison Square Garden
                </span>
                <span className=" font-light   text-white ">
                  New York Knicks vs Toronto Raptors
                </span>
              </div>
              <div className="flex flex-row text-left justify-between  pt-2">
                <div className="flex flex-col text-left">
                  <span className=" font-light uppercase  text-blue-300 ">
                    Section
                  </span>
                  <span className=" font-light uppercase   text-white ">
                    220
                  </span>
                </div>
                <div className="flex flex-col text-left">
                  <span className=" font-light uppercase  text-blue-300 ">
                    Row
                  </span>
                  <span className=" font-light uppercase   text-white ">5</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className=" font-light uppercase  text-blue-300 ">
                    Seat
                  </span>
                  <span className=" font-light uppercase   text-white ">
                    24{' '}
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left pt-2 pb-24">
                <span className=" font-light text-xs  text-blue-300 uppercase">
                  Entry Info
                </span>
                <span className=" font-light   text-white uppercase">
                  Enter 31ST/8th
                </span>
              </div>
              <div className="items-baseline grid justify-items-end ">
                <WifiIcon
                  className="h-8 w-8 text-gray-400 transform rotate-90"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </Slider>

        <img className="object-fill h-36 w-full" src="/hold.png" alt="" />
      </div>
    </div>
  );
}
