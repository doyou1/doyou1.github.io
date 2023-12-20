export type SponsorItem = {
  sponsorUrl: string;
  imgUrl: string;
};

export type SponsorItemType = {
  sponsorGrade: string;
  sponsorDetail: SponsorItem[];
};

export type SponsorItemListType = SponsorItemType[]

export type SponsorUrlType = string[];

export type ImageModules = { [key: string]: { default: string } };