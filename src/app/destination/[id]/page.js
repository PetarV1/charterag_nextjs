import Image from "next/image";
import RouteHighlights from "@/components/RouteHighlights";
import ChooseRouteSection from "@/components/ChooseRouteSection";

const routeInfo = [
  {
    text: "Party vibe",
    iconUrl: "/destinationspage/BoatIcon.svg",
  },
  {
    text: "Up to 40 people",
    iconUrl: "/destinationspage/PeopleIcon.svg",
  },
  {
    text: "20 - 40 age range",
    iconUrl: "/destinationspage/ManIcon.svg",
  },
  {
    text: "Free WiFi",
    iconUrl: "/destinationspage/WifiIcon.svg",
  },
  {
    text: "July | August",
    iconUrl: "/destinationspage/calendarIcon.svg",
  },
];

export default async function Page({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/destinations.json`
  );
  const destinations = await res.json();
  console.log(destinations[0].id);

  const id = (await params).id;
  const destination = destinations.find((dest) => dest.id === id);

  return (
    <>
      <section className="hero bg-background">
        <div className="max-w-[1440px] w-full mx-auto pt-[173px] relative">
          <div className="absolute h-[1316.78px] top-0 z-[1] w-full mx-auto">
            <Image
              src="/destinationspage/TeksturaDestination.svg"
              layout="fill"
              objectFit="cover"
              alt="Background Texture"
            />
          </div>
          <div className="h-[510px] w-full relative z-10">
            <Image
              src="/destinationspage/destination-hero.png"
              layout="fill"
              objectFit="cover"
              alt="Background Texture"
            />
            <div className="image-overlay"></div>
            {/* Heading */}
            <div className="inline-flex flex-col absolute bottom-[60px] left-[170px] items-start gap-4 z-10">
              <span className="leading-[130%]">{destination.routeType}</span>
              <h2 className="text-[46px] font-semibold leading-none">
                The best stories are
                <br /> yet to be told
              </h2>
            </div>
            {/* About Route Box */}
            <div className="inline-flex flex-col py-8 px-10 items-start gap-10 rounded-[10px] bg-white box-shadow absolute z-10 top-[224px] right-[170px]">
              {/* First Row */}
              <div className="flex flex-col items-start gap-2">
                <h4 className="text-2xl font-medium leading-[100%] w-[288px] text-greenVogue950">
                  {destination.routeName}
                </h4>
                <div className="w-[222px] h-5 flex gap-[6px] items-center">
                  <Image
                    width={20}
                    height={20}
                    src="/destinationspage/Star.svg"
                    alt="Star"
                  />
                  <span className="text-[18px] font-semibold leading-[120%] text-gray600">
                    {destination.rating}
                  </span>
                  <span className="text-base font-normal leading-[130%] text-gray500">
                    rating of {destination.reviews} reviews
                  </span>
                </div>
              </div>
              {/* Second Row */}
              <div className="flex flex-col items-start gap-5">
                {routeInfo.map((info, index) => {
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <Image
                        width={32}
                        height={32}
                        alt={info.text}
                        src={info.iconUrl}
                      />
                      <p className="text-base font-normal leading-[130%] text-greenVogue950">
                        {info.text}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Third Row */}
              <div className="flex flex-col items-center gap-5">
                <button className="w-[288px] h-[60px] rounded-[10px] bg-greenVogue950 button-shadow text-center text-base font-medium leading-normal tracking-[1.219px] uppercase">
                  Book now
                </button>
                <p className="text-center text-[14px] leading-[22px] font-normal text-gray600">
                  Prices from {destination.price} per person
                </p>
              </div>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col h-[217px] w-[633px] gap-[38px] items-start pb-[25px] pt-[64px] relative z-10">
            <p className="text-[18px] leading-[120%] text-greenVogue950">
              {destination.description1}
            </p>
            <p className="text-[18px] leading-[120%] text-greenVogue950">
              {destination.description2}
            </p>
          </div>
          <RouteHighlights destination={destination} />
          <ChooseRouteSection />
        </div>
      </section>
    </>
  );
}
