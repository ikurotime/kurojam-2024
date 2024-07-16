'use client'

import { HeroParallax } from '../ui/hero-parallax'
import React from 'react'

export function ParallaxSection() {
  return <HeroParallax products={products} />
}
export const products = [
  {
    title: 'PatoClick',
    link: 'https://github.com/noel-lopez/pato-click',
    thumbnail:
      'https://raw.githubusercontent.com/noel-lopez/pato-click/main/banner.png'
  },
  {
    title: 'La charca del silencio',
    link: 'https://github.com/NachoVBordera/LaCharcaDelSilencio',
    thumbnail:
      'https://i.postimg.cc/MHYh29Gp/Screenshot-2023-08-28-at-10-57-13.png'
  },
  {
    title: 'Rogue',
    link: 'https://github.com/the-frondev/clone-duck',
    thumbnail:
      'https://i.postimg.cc/0yB5B0rs/Screenshot-2023-08-28-at-11-09-53.png'
  },

  {
    title: 'Duckurophy',
    link: 'https://github.com/nujovich/kurojam-sparta',
    thumbnail:
      'https://i.postimg.cc/bJr2D9rV/Screenshot-2023-08-28-at-11-38-58.png'
  },
  {
    title: 'Duck Hunt',
    link: 'https://github.com/JoniSchimansky/DuckHunt',
    thumbnail:
      'https://i.postimg.cc/J4vM3cnH/Screenshot-2023-08-28-at-11-35-26.png'
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail:
      'https://i.postimg.cc/0yB5B0rs/Screenshot-2023-08-28-at-11-09-53.png'
  },
  {
    title: 'PatoClick',
    link: 'https://github.com/noel-lopez/pato-click',
    thumbnail:
      'https://raw.githubusercontent.com/noel-lopez/pato-click/main/banner.png'
  },
  {
    title: 'Pat-Attack',
    link: 'https://github.com/watercubz/pat-Attack',
    thumbnail:
      'https://i.postimg.cc/QNkPtNQ9/Screenshot-2023-08-28-at-11-23-46.png'
  },
  {
    title: 'La charca del silencio',
    link: 'https://github.com/NachoVBordera/LaCharcaDelSilencio',
    thumbnail:
      'https://i.postimg.cc/MHYh29Gp/Screenshot-2023-08-28-at-10-57-13.png'
  },

  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail:
      'https://i.postimg.cc/J4vM3cnH/Screenshot-2023-08-28-at-11-35-26.png'
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail:
      'https://i.postimg.cc/QNkPtNQ9/Screenshot-2023-08-28-at-11-23-46.png'
  }
]
