import { PAGE_ACTIVITES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/const/pages'
import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline'

export const NAV_ITEMS = {
    [ PAGE_TIMELINE ]: ClockIcon,
    [ PAGE_ACTIVITES ]: ListBulletIcon,
    [ PAGE_PROGRESS ]: ChartBarIcon
}