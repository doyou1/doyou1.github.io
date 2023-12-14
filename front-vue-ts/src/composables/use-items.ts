export type SponsorItem = {
  imgUrl: string;
  sponsorUrl: string;
};

// 231212 정은우: test 이미지에 url을 동적으로 삽입하는 방법을 찾지 못해 일단 이미지만 불러오는 방법으로 해봅니다.
export type SponsorImage = string[]

export type SponsorItemType = {
  sponsorGrade: string;
  sponsorDetail: SponsorImage[];
};

export type SponsorItemListType = SponsorItemType[]

export type SponsorUrlType = string[];

export type ImageModules = { [key: string]: { default: string } };