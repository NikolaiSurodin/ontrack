import { PAGE_ACTIVITES, PAGE_PROGRESS, PAGE_TIMELINE } from '@/const/pages'
import { HOUR_IN_DAY } from '@/const/const'

export function normalizeHashPage() {
    const hash = window.location.hash.slice( 1 )
    if( [ PAGE_TIMELINE, PAGE_ACTIVITES, PAGE_PROGRESS ].includes( hash ) ) {
        return hash
    }
    window.location.hash = PAGE_TIMELINE

    return PAGE_TIMELINE
}


export function generateTimelineItems() {
    const timelineItems = []

    for ( let hour = 0; hour < HOUR_IN_DAY; hour++ ) {
        timelineItems.push( { hour } )
    }
    return timelineItems
}