import asyncComponent from "lib/asyncComponent";

export const Home = asyncComponent(() => import("./Home"));
export const Perspective = asyncComponent(() => import("./Perspective"));
export const Event = asyncComponent(() => import("./Event"));
// export const Tab = asyncComponent(() => import('./Tab'));
// export const Tabs = asyncComponent(() => import('./Tabs'));
// export const OptionalComponent = asyncComponent(() => import('components/OptionalComponent'));
//components
// export const  = asyncComponent(() => import("components/"));
export const VerticalHr = asyncComponent(() => import("components/VerticalHr"));
// ./eventpage
export const SourceBox = asyncComponent(() => import("components/eventpage/SourceBox"));
export const SourceBoxItemPush = asyncComponent(() => import("components/eventpage/SourceBoxItemPush"));
export const SourceBoxList = asyncComponent(() => import("components/eventpage/SourceBoxList"));
export const SourceBoxListItem = asyncComponent(() => import("components/eventpage/SourceBoxListItem"));
export const SourceBoxTab = asyncComponent(() => import("components/eventpage/SourceBoxTab"));
export const QnABox = asyncComponent(() => import("components/eventpage/QnABox"));
// export const  = asyncComponent(() => import("components/eventpage/"));
// export const  = asyncComponent(() => import("components/eventpage/"));
// export const  = asyncComponent(() => import("components/eventpage/"));
// export const  = asyncComponent(() => import("components/eventpage/"));
// export const  = asyncComponent(() => import("components/eventpage/"));