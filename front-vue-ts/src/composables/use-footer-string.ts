// 231208 정은우
// 위쪽 footer, 아래쪽 footer 나누어서 type 지정하면 조을 듯
type FooterDetailType = {
  detailName: string;
  detailUrl: string;
  newPage: boolean;
};

export type FooterColType = {
  footerTitle: string;
  footerDetail: FooterDetailType[];
};

export type FooterColStructureType = FooterColType[];


type FooterBottomLinkDetail={
    text:string;
    url?:string;
}

export type FooterBottomText = {
    bottomLink: FooterBottomLinkDetail[];
    bottomText:string;
}