import localFont from '@next/font/local'
import {Satisfy} from '@next/font/google'

export const satisfyFont = Satisfy({
    weight: ['400'],
    style:['normal']
})

export const switzerFont = localFont({src:'./switzer/Fonts/WEB/fonts/Switzer-Regular.woff2'})
export const euclidFont = localFont({src:'./euclid.woff2'})