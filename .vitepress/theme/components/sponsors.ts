// shared data across instances so we load only once

import { ref } from 'vue'

export interface Sponsor {
  url: string
  img: string
  name: string
  description?: string
}

export interface SponsorData {
  special: Sponsor[]
  platinum: Sponsor[]
  platinum_china: Sponsor[]
  gold: Sponsor[]
  silver: Sponsor[]
  bronze: Sponsor[]
}

export const data = ref<SponsorData>()
export const pending = ref<boolean>(false)

export const base = `https://sponsors.vuejs.org`

export const load = async () => {
  if (!pending.value) {
    pending.value = true
    // data.value = await (await fetch(`${base}/data.json`)).json()
    data.value = {
      special: [
        {
          name: 'Nuxt',
          url: 'https://nuxtjs.org',
          img: 'https://nuxt.com/assets/design-kit/logo/full-logo-green-dark.svg',
          description: 'The preferred way to start with Vue.',
        }
      ],
      platinum: [
        {
          name: 'Vue',
          url: 'https://vuejs.org/',
          img: 'https://raw.githubusercontent.com/johnsoncodehk/volar/master/.github/sponsors/vue.png',
        },
      ],
      platinum_china: [],
      gold: [
        {
          name: 'Volta',
          url: 'https://volta.net/',
          img: 'https://raw.githubusercontent.com/johnsoncodehk/volar/master/.github/sponsors/volta.svg',
        },
      ],
      silver: [
        {
          name: 'Prefect',
          url: 'https://www.prefect.io/',
          img: 'https://raw.githubusercontent.com/johnsoncodehk/volar/master/.github/sponsors/prefect.svg',
        },
        {
          name: '365Talents',
          url: 'https://github.com/365talents',
          img: 'https://raw.githubusercontent.com/johnsoncodehk/volar/master/.github/sponsors/365talents.png',
        },
      ],
      bronze: [],
    }
  }
}
