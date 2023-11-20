type MenuType = {
  name: string;
  type: "default" | "subTitle" | "link" | "divider";
};
export type MenuGroupType = {
  title: string;
  menu: MenuType[];
};

export type MenuGroupListType = {
  docs: MenuGroupType;
  ecosystem: MenuGroupType;
  about: MenuGroupType;
};

type MenuLinkType = {
  title: string;
};

export type MenuLinkListType = {
  api: MenuLinkType;
  playground: MenuLinkType;
  sponsor: MenuLinkType;
  partners: MenuLinkType;
};
