type SponsorItem = {
  imgUrl: string;
  sponsorUrl: string;
};

export type SponsorItemType = {
  sponsorGrade: string;
  sponsorDetail: SponsorItem[];
};

export type SponsorItemListType = SponsorItemType[]

export type SponsorUrlType = string[];