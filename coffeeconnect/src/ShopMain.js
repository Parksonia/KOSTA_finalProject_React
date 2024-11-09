//import {Carousel} from "flowbite-react";
import { Carousel } from "@material-tailwind/react";
import * as s from './styledcomponent/shopmain.tsx'
function ShopMain() {
  
  
  const bannerImages = [
    {
      id: 1,
      imageUrl: "/image/cafe1.jpg"
    },
    {
      id: 2,
      imageUrl: "/image/cafe2.jpg"
    },
    {
      id: 3,
      imageUrl: "/image/cafe3.jpg"
    }

  ];
  const items = [
    {
      id: 1,
      name:'에티오피아 코케허니 G1스페셜티',
      imageUrl: "/image/item1.jpg",
      price:'	11,500원',
      bgColor:"#45b0da",
      storageType:"냉동"

    },
    {
      id: 2,
      name:'달보드레 블랜드',
      imageUrl: "/image/item2.jpg",
      price:'8,500원'

    },
    {
      id: 3,
      name:'에티오피아 예가체프 G2',
      imageUrl: "/image/item3.jpg",
      price:'22,000원',
      bgColor:"#45b0da",
      storageType:"냉동"

    },
    {
      id: 4,
      name:'코스타리카 드립백',
      imageUrl: "/image/item4.jpg",
      price:'8,500원'

    },
    {
      id: 5,
      name:'에티오피아 첼베사 워시드 스페셜티',
      imageUrl: "/image/item5.jpg",
      price:'13,000원'

    },
    {
      id: 6,
      name:'과테말라 코반 스페셜',
      imageUrl: "/image/item1.jpg",
      price:'8,900원'

    },
  ]


  return (

    <div className="h-[480px] mt-16">

      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {/* 배너 이미지 */}
        {bannerImages.map((banner) => (
          <img key={banner.id}
            src={banner.imageUrl}
            alt="testing"
            className="w-full h-full object-cover"
          />
        ))}
      </Carousel>
     {/* 상품 목록 시작*/}

      <s.ShopMainWrapper>
        <s.ShopMainContainer>
          <s.ShopMainContent>
            <s.ShopMainTitle>커피자재
              <s.ShopMaintTitlePlus>+</s.ShopMaintTitlePlus>
            </s.ShopMainTitle>
            <s.ShopMainItemList>
              <s.ItemListUl>
                {items.map((item) => (
                  <s.ItemListLi >
                    <s.ItemListA></s.ItemListA>
                    <s.ItemListImg><img key={item.id} src={item.imageUrl}></img></s.ItemListImg>
                    <s.ItemListTextBox>
                      <s.ItemTitle>{item.name}</s.ItemTitle>
                      <s.ItemPrice>{item.price}</s.ItemPrice>
                      <s.ItemStorageLabelP>
                        <s.ItemStorageType bgColor={item.bgColor}>{item.storageType}</s.ItemStorageType>
                      </s.ItemStorageLabelP>
                    </s.ItemListTextBox>
                  </s.ItemListLi>
                ))}

              </s.ItemListUl>
            </s.ShopMainItemList>

          </s.ShopMainContent>
        </s.ShopMainContainer>
      </s.ShopMainWrapper>
      {/* 상품 목록 끝 */}
           {/* 상품 목록 시작*/}

           <s.ShopMainWrapper>
        <s.ShopMainContainer>
          <s.ShopMainContent>
            <s.ShopMainTitle>분말가공
              <s.ShopMaintTitlePlus>+</s.ShopMaintTitlePlus>
            </s.ShopMainTitle>
            <s.ShopMainItemList>
              <s.ItemListUl>
                {items.map((item) => (
                  <s.ItemListLi >
                    <s.ItemListA></s.ItemListA>
                    <s.ItemListImg><img key={item.id} src={item.imageUrl}></img></s.ItemListImg>
                    <s.ItemListTextBox>
                      <s.ItemTitle>{item.name}</s.ItemTitle>
                      <s.ItemPrice>{item.price}</s.ItemPrice>
                      <s.ItemStorageLabelP>
                        <s.ItemStorageType bgColor={item.bgColor}>{item.storageType}</s.ItemStorageType>
                      </s.ItemStorageLabelP>
                    </s.ItemListTextBox>
                  </s.ItemListLi>
                ))}

              </s.ItemListUl>
            </s.ShopMainItemList>

          </s.ShopMainContent>
        </s.ShopMainContainer>
      </s.ShopMainWrapper>
      {/* 상품 목록 끝 */}
           {/* 상품 목록 시작*/}

           <s.ShopMainWrapper>
        <s.ShopMainContainer>
          <s.ShopMainContent>
            <s.ShopMainTitle>유가공품
              <s.ShopMaintTitlePlus>+</s.ShopMaintTitlePlus>
            </s.ShopMainTitle>
            <s.ShopMainItemList>
              <s.ItemListUl>
                {items.map((item) => (
                  <s.ItemListLi >
                    <s.ItemListA></s.ItemListA>
                    <s.ItemListImg><img key={item.id} src={item.imageUrl}></img></s.ItemListImg>
                    <s.ItemListTextBox>
                      <s.ItemTitle>{item.name}</s.ItemTitle>
                      <s.ItemPrice>{item.price}</s.ItemPrice>
                      <s.ItemStorageLabelP>
                        <s.ItemStorageType bgColor={item.bgColor}>{item.storageType}</s.ItemStorageType>
                      </s.ItemStorageLabelP>
                    </s.ItemListTextBox>
                  </s.ItemListLi>
                ))}

              </s.ItemListUl>
            </s.ShopMainItemList>

          </s.ShopMainContent>
        </s.ShopMainContainer>
      </s.ShopMainWrapper>
      {/* 상품 목록 끝 */}

    </div>

  )
}
export default ShopMain;