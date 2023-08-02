import { markdownify } from "@lib/utils/textConverter";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Cta from "./components/Cta";
import ImageFallback from "./components/ImageFallback";
import VideoPopup from "./components/VideoPopup";
import Youtube from "./shortcodes/Youtube";

const About = ({ data }) => {
  const { frontmatter } = data;
  const {
    title,
    about_us,
    requirements,
    admin_territory,
    video,
    screenshots,
    our_member,
    extra,
  } = frontmatter;

  return (
    <>
      <section className="section pt-0">
        <Banner title={title} />
        {/* About */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5 md:order-2">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={about_us.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="top-4 left-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="top-20 right-10 z-[-1]"
                />
                <Circle
                  className="top-1/2 right-12 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="top-1/2 left-12 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4 md:order-1">
              <p>{about_us.subtitle}</p>
              {markdownify(about_us.title, "h2", "section-title bar-left mt-4")}
              {markdownify(about_us.content, "p", "mt-10")}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="section container">
          <div className="animate text-center">
            <p>{requirements.subtitle}</p>
            {markdownify(requirements.title, "h2", "section-title mt-4")}
            {markdownify(requirements.content, "p", "mt-10")}
          </div>
          <div className="row mt-10 justify-center">
            {requirements.list.map((work, index) => (
              <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                <div className="animate text-center md:px-6 xl:px-12">
                  {markdownify(work.title, "h3", "h4")}
                  {markdownify(work.content, "p", "mt-2")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admin Territory */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src={admin_territory.image}
                  width={425}
                  height={487}
                  alt=""
                />
                <Circle
                  className="top-4 left-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="top-20 right-10 z-[-1]"
                />
                <Circle
                  className="top-1/2 right-12 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="top-1/2 left-12 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4">
              <p>{admin_territory.subtitle}</p>
              {markdownify(admin_territory.title, "h2", "section-title bar-left mt-4")}
              {markdownify(admin_territory.content, "p", "mt-10")}
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="container-xl relative">
          <div className="bg-theme absolute top-0 left-0 w-full">
            <Circle
              className="left-[7%] top-[21%]"
              width={32}
              height={32}
              fill={false}
            />
            <Circle
              className="left-[30%] top-[10%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="left-[4%] bottom-[35%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="left-[10%] bottom-[11%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle
              className="left-[44%] bottom-[48%]"
              width={37}
              height={37}
              fill={false}
            />
            <Circle
              className="left-[35%] bottom-[22%]"
              width={20}
              height={20}
              fill={false}
            />
            <Circle
              className="right-[32%] top-[2%]"
              width={47}
              height={47}
              fill={false}
            />
          </div>
          <div className="row items-center justify-center py-[90px]">
            <div className="md:col-6 xl:col-4">
              <div className="animate p-5">
                <p>{video.subtitle}</p>
                {markdownify(video.title, "h2", "mt-4 section-title bar-left")}
                {markdownify(video.description, "p", "mt-10")}
              </div>
            </div>
            <div className="md:col-6 xl:col-5">
              <div className="px-4 ">
                <Youtube id="0z3uQ76Cti4" title="Play:Youtube"/>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="section container hidden">
          <div className="animate text-center">
            <p>{screenshots.subtitle}</p>
            {markdownify(screenshots.title, "h2", "section-title mt-4")}
          </div>
          <div className="animate from-right col-12 mt-16">
            <Swiper
              loop={true}
              slidesPerView={3}
              breakpoints={{
                992: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={20}
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
            >
              {screenshots.brands.map((brand, index) => (
                <SwiperSlide
                  className=" h-20 cursor-pointer py-6 px-6 grayscale  transition hover:grayscale-0 lg:px-10"
                  key={"brand-" + index}
                >
                  <div className="relative h-full">
                    <ImageFallback
                      className="object-contain"
                      src={brand}
                      sizes="100vw"
                      alt=""
                      fill={true}
                      priority={true}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Members */}
        <div className="section container">
          <div className="animate text-center">
            <p>{our_member.subtitle}</p>
            {markdownify(our_member.title, "h2", "section-title mt-4")}
            {markdownify(our_member.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row">
                {our_member.list.map((member, index) => (
                  <div
                    key={("member-", index)}
                    className="animate mt-10 text-center md:col-6 lg:col-4"
                  >
                    <ImageFallback
                      className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                      src={member.image}
                      width={245}
                      height={245}
                      alt={member.name}
                    />
                    <h4 className="mt-8">{member.name}</h4>
                    <p className="mt-3">{member.field}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Extra */}
        <div className="section container hidden">
          <div className="animate text-center">
            <p>{extra.subtitle}</p>
            {markdownify(extra.title, "h2", "section-title mt-4")}
            {markdownify(extra.content, "p", "mt-16")}
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row  justify-center">
                {extra.territories.map((territory, index) => (
                  <div
                    key={("territory-", index)}
                    className="animate mt-10 md:col-6 xl:col-3"
                  >
                    <div className="rounded-xl p-5 shadow-[0_4px_25px_rgba(0,0,0,.05)]">
                      <ImageFallback
                        // className="mx-auto"
                        src={territory.icon}
                        width={80}
                        height={80}
                        alt={territory.name}
                      />
                      <h5 className="h4 mt-2">{territory.name}</h5>
                      <p className="mt-2">{territory.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default About;
