import type { RouteMeta as IRouteMeta } from '@repo-core/typings';

import 'vue-router';

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RouteMeta extends IRouteMeta {}
}

declare module  'vue-router'{
  interface RouteMeta extends IRouteMeta{}
}

export interface CloudSystemWebConfigRaw{
  VITE_GLOB_API_URL: string
}

export interface ApplicationConfig{
  apiURL: string
}

declare global {
  interface Window {
    _CLOUD_SYSTEM_WEB_CONF_: CloudSystemWebConfigRaw;
  }
}
