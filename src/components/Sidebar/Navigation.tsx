import { useRouter } from 'next/router'
import * as React from 'react'
import { Plus } from 'react-feather'

import { AddBookmarkDialog } from '~/components/Bookmarks/AddBookmarkDialog'
import { GhostButton } from '~/components/Button'
import {
  AMAIcon,
  AppDissectionIcon,
  BookmarksIcon,
  CritIcon,
  ExternalLinkIcon,
  FigmaIcon,
  GitHubIcon,
  GoogleIcon,
  HackerNewsIcon,
  HomeIcon,
  LinkedinIcon,
  PositIcon,
  SecurityChecklistIcon,
  StackIcon,
  WritingIcon,
  WunderkindIcon,
} from '~/components/Icon'
import { useViewerQuery } from '~/graphql/types.generated'

import { NavigationLink } from './NavigationLink'

function ThisAddBookmarkDialog() {
  return (
    <AddBookmarkDialog
      trigger={
        <GhostButton aria-label="Add bookmark" size="small-square">
          <Plus size={16} />
        </GhostButton>
      }
    />
  )
}

export function SidebarNavigation() {
  const router = useRouter()
  const { data } = useViewerQuery()
  const sections = [
    {
      label: null,
      items: [
        {
          href: '/',
          label: 'Home',
          icon: HomeIcon,
          trailingAccessory: null,
          isActive: router.asPath === '/',
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/writing',
          label: 'Writing',
          icon: WritingIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/writing') >= 0,
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
    {
      label: 'Me',
      items: [
        {
          href: '/bookmarks',
          label: 'Bookmarks',
          icon: BookmarksIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/bookmarks') >= 0,
          trailingAction: data?.viewer?.isAdmin ? ThisAddBookmarkDialog : null,
          isExternal: false,
        },

        {
          href: '/ama',
          label: 'AMA',
          icon: AMAIcon,
          trailingAccessory: null,
          isActive:
            router.asPath.indexOf('/ama') >= 0 &&
            !router.asPath.startsWith('/ama/pending'),
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/stack',
          label: 'Stack',
          icon: StackIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/stack') >= 0,
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
    {
      label: 'Projects',
      items: [
        {
          href: 'https://posit.co/',
          label: 'Posit',
          icon: PositIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://www.wunderkind.co/',
          label: 'Wunderkind',
          icon: WunderkindIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://www.google.com/',
          label: 'Google',
          icon: GoogleIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: '/security',
          label: 'Security Checklist',
          icon: SecurityChecklistIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/security') >= 0,
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/hn',
          label: 'Hacker News',
          icon: HackerNewsIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/hn') >= 0,
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/app-dissection',
          label: 'App Dissection',
          icon: AppDissectionIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/app-dissection') >= 0,
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
    {
      label: 'Online',
      items: [
        {
          href: 'https://www.linkedin.com/in/ultramcgh/',
          label: 'LinkedIn',
          icon: LinkedinIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://github.com/yaykek',
          label: 'GitHub',
          icon: GitHubIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },
      ],
    },
  ]

  return (
    <div className="flex-1 px-3 py-3 space-y-1">
      {sections.map((section, i) => {
        return (
          <ul key={i} className="space-y-1">
            {section.label && (
              <h4
                key={i}
                className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
              >
                {section.label}
              </h4>
            )}
            {section.items.map((item, j) => (
              <NavigationLink key={j} link={item} />
            ))}
          </ul>
        )
      })}
    </div>
  )
}
