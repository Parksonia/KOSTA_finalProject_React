import styled from 'styled-components';


export const ShopMainWrapper =styled.div`
    display: block;

`
;
export const ShopMainContainer =styled.div`
    
    width:1580px;
    display: block;
    clear: both;
    content: '';
    margin: 120px auto 0;
`
;
export const ShopMainContent = styled.div`
    margin-top: 60px;
`
;
export const ShopMainTitle =styled.h2`
    height: 52px;
    color: #333;
    font-family: "Noto Sans KR";
    font-size: 48px;
    text-align: center;
    margin-bottom: 15px;
    
`
;
export const ShopMaintTitlePlus = styled.a`
    
    display: inline-block;
    position: relative;
    margin-left: 10px;
    margin-top: -5px;
    font-size: 80px;
    font-weight: 100;
    vertical-align: sub;

`
;
export const ShopMainItemList =styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-top: 60px;
`
;
export const ItemListUl = styled.ul`
    margin: 0;
    padding: 0;
    margin-right: -22px;

`
;
export const ItemListLi = styled.li`
    width: 242px;
    margin-right: 22px;
    float: left;
    margin-bottom: 50px;
    position: relative;
`
;
export const ItemListA = styled.a`
    text-decoration: none;

`
;
export const ItemListImg = styled.div`
    height: 272px;
    position: relative;
    margin-bottom: 16px;
    overflow: hidden;
`
;
export const ItemListTextBox = styled.div`
    padding: 0 4px 0 6px;
`
;
export const ItemTitle = styled.div`
    /* height: 94px; */
    font-size: 14px;
    line-height: 16px;
    margin: 0 0 7px 0 !important;
    font-family: "Noto Sans KR";
    font-weight: 500;
    width: auto;
    min-height: auto;
    max-height: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`
;
export const ItemPrice = styled.div`
    position: relative;
    font-family: "Noto Sans KR";
    font-weight: 400;
    line-height: normal;
    margin-bottom: 14px;
    -webkit-display: flex;
    -ms-display: flex;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
`
;
export const ItemStorageLabelP= styled.p`
        display: block;
        overflow: hidden;
        margin: 0;
` 
;
interface ItemStorageTypeProps {
    bgColor: string;
}

export const ItemStorageType= styled.span<ItemStorageTypeProps>`
    background: ${(props) => props.bgColor};
    color: #fff;
    width: auto;
    text-indent: initial;
    font-size: 11px;
    line-height: 14px;
`
;

