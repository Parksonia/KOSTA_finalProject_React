//import {Carousel} from "flowbite-react";
import {Carousel} from "@material-tailwind/react";
function MainBanner() {
    const bannerImages = [
        {
            id:1,
            imageUrl:"/image/cafe1.jpg"
        },
        {
            id:2,
            imageUrl:"/image/cafe2.jpg"
        },
        {
            id:3,
            imageUrl:"/image/cafe3.jpg"
        }

    ];

    return(

        <div className="h-[500px]">
          
          <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >

            {/* <Carousel slideInterval={5000}
            className="h-[500px]"> */}
               

            {/* 배너 이미지 */}
            {bannerImages.map((banner) => (
            <img key={banner.id}
              src={banner.imageUrl}
              alt="testing"
              className="w-full h-full object-cover"
            />
                        ))}
            </Carousel>
                 {/* 상품 목록 섹션 */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">커피자재</h2>
        {/* 상품 목록 컴포넌트 */}
      </section>
    </div>

    )
}
export default MainBanner;