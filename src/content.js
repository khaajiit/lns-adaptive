export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contacts', label: 'Contacts' },
]

export const SOCIAL = {
  instagram: 'https://www.instagram.com/lns_nail/',
  telegram: 'https://t.me/Lina_Ber',
}

export const SLIDES = [1, 2, 3, 4].map((n) => ({
  full: `/images/slides_pictures/Screenshot_${n}.png`,
  small: `/images/slides_pictures/small/Screenshot_${n}.png`,
  alt: `Lina Nail Studio — photo ${n}`,
}))

export const SERVICES = [
  { name: 'Combined manicure / hardware manicure without cover', price: '1700 RSD' },
  { name: 'Combined manicure / hardware manicure, coated monochrome', price: '2000 RSD' },
  { name: 'Repair / rebuilding, 1 nail', price: '300 RSD' },
  { name: 'Gel strengthening', price: '700 RSD' },
  { name: 'Removal without coating and manicure', price: '500 RSD' },
  { name: 'Male manicure without coating', price: '2000 RSD' },
  { name: 'Design on request (negotiated in advance)', price: 'From 100 to 1000 RSD' },
]

export const INSTAGRAM_PHOTOS = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/images/insta_photos/Screenshot_${n}.png`,
  alt: `Nail art example ${n}`,
}))
