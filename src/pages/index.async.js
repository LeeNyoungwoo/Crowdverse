import asyncComponent from "lib/asyncComponent";

export const Home = asyncComponent(() => import("./Home"));
export const Perspective = asyncComponent(() => import("./Perspective"));
export const Event = asyncComponent(() => import("./Event"));
// export const Tab = asyncComponent(() => import('./Tab'));
// export const Tabs = asyncComponent(() => import('./Tabs'));
// export const OptionalComponent = asyncComponent(() => import('components/OptionalComponent'));
//components
// export const  = asyncComponent(() => import("components/"));
export const Header = asyncComponent(() => import("components/Header"));
export const VerticalHr = asyncComponent(() => import("components/VerticalHr"));
export const BreadCrumbs = asyncComponent(() => import("components/BreadCrumbs"));
export const AddModal = asyncComponent(() => import("components/AddModal"));
export const ContentModal = asyncComponent(() => import("components/ContentModal"));

// ./Perspective
export const EventBoxList = asyncComponent(() => import("components/perspectivepage/EventBoxList"));
export const EventBoxListItem = asyncComponent(() => import("components/perspectivepage/EventBoxListItem"));

// ./Compoment/ComtentModal
export const ContentComentPush = asyncComponent(() => import("components/ContentModal/ContentComentPush"));

// ./eventpage
export const SourceBox = asyncComponent(() => import("components/eventpage/SourceBox"));
export const SourceBoxItemPush = asyncComponent(() => import("components/eventpage/SourceBoxItemPush"));
export const SourceBoxList = asyncComponent(() => import("components/eventpage/SourceBoxList"));
export const SourceBoxListItem = asyncComponent(() => import("components/eventpage/SourceBoxListItem"));
export const SourceBoxTab = asyncComponent(() => import("components/eventpage/SourceBoxTab"));
export const QnABox = asyncComponent(() => import("components/eventpage/QnABox"));
export const QnABoxItemPush = asyncComponent(() => import("components/eventpage/QnABoxItemPush"));
export const QnABoxList = asyncComponent(() => import("components/eventpage/QnABoxList"));
export const QnABoxListItem = asyncComponent(() => import("components/eventpage/QnABoxListItem"));
export const QnABoxAnswerBox = asyncComponent(() => import("components/eventpage/QnABoxAnswerBox"));
// export const  = asyncComponent(() => import("components/eventpage/"));
// export const  = asyncComponent(() => import("components/eventpage/"));
// export const  = asyncComponent(() => import("components/eventpage/"));