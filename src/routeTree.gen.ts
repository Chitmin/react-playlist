/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as XdForLifeImport } from './routes/xd-for-life'
import { Route as WorkoutMixImport } from './routes/workout-mix'
import { Route as TopChartsImport } from './routes/top-charts'
import { Route as SongsImport } from './routes/songs'
import { Route as PlaylistsImport } from './routes/playlists'
import { Route as JustForYouImport } from './routes/just-for-you'
import { Route as ChillinAtHomeImport } from './routes/chillin-at-home'
import { Route as BoopingAtAdobeImport } from './routes/booping-at-adobe'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const XdForLifeRoute = XdForLifeImport.update({
  id: '/xd-for-life',
  path: '/xd-for-life',
  getParentRoute: () => rootRoute,
} as any)

const WorkoutMixRoute = WorkoutMixImport.update({
  id: '/workout-mix',
  path: '/workout-mix',
  getParentRoute: () => rootRoute,
} as any)

const TopChartsRoute = TopChartsImport.update({
  id: '/top-charts',
  path: '/top-charts',
  getParentRoute: () => rootRoute,
} as any)

const SongsRoute = SongsImport.update({
  id: '/songs',
  path: '/songs',
  getParentRoute: () => rootRoute,
} as any)

const PlaylistsRoute = PlaylistsImport.update({
  id: '/playlists',
  path: '/playlists',
  getParentRoute: () => rootRoute,
} as any)

const JustForYouRoute = JustForYouImport.update({
  id: '/just-for-you',
  path: '/just-for-you',
  getParentRoute: () => rootRoute,
} as any)

const ChillinAtHomeRoute = ChillinAtHomeImport.update({
  id: '/chillin-at-home',
  path: '/chillin-at-home',
  getParentRoute: () => rootRoute,
} as any)

const BoopingAtAdobeRoute = BoopingAtAdobeImport.update({
  id: '/booping-at-adobe',
  path: '/booping-at-adobe',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/booping-at-adobe': {
      id: '/booping-at-adobe'
      path: '/booping-at-adobe'
      fullPath: '/booping-at-adobe'
      preLoaderRoute: typeof BoopingAtAdobeImport
      parentRoute: typeof rootRoute
    }
    '/chillin-at-home': {
      id: '/chillin-at-home'
      path: '/chillin-at-home'
      fullPath: '/chillin-at-home'
      preLoaderRoute: typeof ChillinAtHomeImport
      parentRoute: typeof rootRoute
    }
    '/just-for-you': {
      id: '/just-for-you'
      path: '/just-for-you'
      fullPath: '/just-for-you'
      preLoaderRoute: typeof JustForYouImport
      parentRoute: typeof rootRoute
    }
    '/playlists': {
      id: '/playlists'
      path: '/playlists'
      fullPath: '/playlists'
      preLoaderRoute: typeof PlaylistsImport
      parentRoute: typeof rootRoute
    }
    '/songs': {
      id: '/songs'
      path: '/songs'
      fullPath: '/songs'
      preLoaderRoute: typeof SongsImport
      parentRoute: typeof rootRoute
    }
    '/top-charts': {
      id: '/top-charts'
      path: '/top-charts'
      fullPath: '/top-charts'
      preLoaderRoute: typeof TopChartsImport
      parentRoute: typeof rootRoute
    }
    '/workout-mix': {
      id: '/workout-mix'
      path: '/workout-mix'
      fullPath: '/workout-mix'
      preLoaderRoute: typeof WorkoutMixImport
      parentRoute: typeof rootRoute
    }
    '/xd-for-life': {
      id: '/xd-for-life'
      path: '/xd-for-life'
      fullPath: '/xd-for-life'
      preLoaderRoute: typeof XdForLifeImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/booping-at-adobe': typeof BoopingAtAdobeRoute
  '/chillin-at-home': typeof ChillinAtHomeRoute
  '/just-for-you': typeof JustForYouRoute
  '/playlists': typeof PlaylistsRoute
  '/songs': typeof SongsRoute
  '/top-charts': typeof TopChartsRoute
  '/workout-mix': typeof WorkoutMixRoute
  '/xd-for-life': typeof XdForLifeRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/booping-at-adobe': typeof BoopingAtAdobeRoute
  '/chillin-at-home': typeof ChillinAtHomeRoute
  '/just-for-you': typeof JustForYouRoute
  '/playlists': typeof PlaylistsRoute
  '/songs': typeof SongsRoute
  '/top-charts': typeof TopChartsRoute
  '/workout-mix': typeof WorkoutMixRoute
  '/xd-for-life': typeof XdForLifeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/booping-at-adobe': typeof BoopingAtAdobeRoute
  '/chillin-at-home': typeof ChillinAtHomeRoute
  '/just-for-you': typeof JustForYouRoute
  '/playlists': typeof PlaylistsRoute
  '/songs': typeof SongsRoute
  '/top-charts': typeof TopChartsRoute
  '/workout-mix': typeof WorkoutMixRoute
  '/xd-for-life': typeof XdForLifeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/booping-at-adobe'
    | '/chillin-at-home'
    | '/just-for-you'
    | '/playlists'
    | '/songs'
    | '/top-charts'
    | '/workout-mix'
    | '/xd-for-life'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/booping-at-adobe'
    | '/chillin-at-home'
    | '/just-for-you'
    | '/playlists'
    | '/songs'
    | '/top-charts'
    | '/workout-mix'
    | '/xd-for-life'
  id:
    | '__root__'
    | '/'
    | '/booping-at-adobe'
    | '/chillin-at-home'
    | '/just-for-you'
    | '/playlists'
    | '/songs'
    | '/top-charts'
    | '/workout-mix'
    | '/xd-for-life'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BoopingAtAdobeRoute: typeof BoopingAtAdobeRoute
  ChillinAtHomeRoute: typeof ChillinAtHomeRoute
  JustForYouRoute: typeof JustForYouRoute
  PlaylistsRoute: typeof PlaylistsRoute
  SongsRoute: typeof SongsRoute
  TopChartsRoute: typeof TopChartsRoute
  WorkoutMixRoute: typeof WorkoutMixRoute
  XdForLifeRoute: typeof XdForLifeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BoopingAtAdobeRoute: BoopingAtAdobeRoute,
  ChillinAtHomeRoute: ChillinAtHomeRoute,
  JustForYouRoute: JustForYouRoute,
  PlaylistsRoute: PlaylistsRoute,
  SongsRoute: SongsRoute,
  TopChartsRoute: TopChartsRoute,
  WorkoutMixRoute: WorkoutMixRoute,
  XdForLifeRoute: XdForLifeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/booping-at-adobe",
        "/chillin-at-home",
        "/just-for-you",
        "/playlists",
        "/songs",
        "/top-charts",
        "/workout-mix",
        "/xd-for-life"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/booping-at-adobe": {
      "filePath": "booping-at-adobe.tsx"
    },
    "/chillin-at-home": {
      "filePath": "chillin-at-home.tsx"
    },
    "/just-for-you": {
      "filePath": "just-for-you.tsx"
    },
    "/playlists": {
      "filePath": "playlists.tsx"
    },
    "/songs": {
      "filePath": "songs.tsx"
    },
    "/top-charts": {
      "filePath": "top-charts.tsx"
    },
    "/workout-mix": {
      "filePath": "workout-mix.tsx"
    },
    "/xd-for-life": {
      "filePath": "xd-for-life.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
