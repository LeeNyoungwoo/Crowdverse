import asyncComponent from 'lib/asyncComponent';

export const Home = asyncComponent(() => import('./Home'));
export const Perspective = asyncComponent(() => import('./Perspective'));
export const Event = asyncComponent(() => import('./Event'));
export const Tab = asyncComponent(() => import('./Tab'));
export const Tabs = asyncComponent(() => import('./Tabs'));
export const OptionalComponent = asyncComponent(() => import('components/OptionalComponent'));