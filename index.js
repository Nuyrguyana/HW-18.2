import './index.css'
console.log('Hello World!')
import JS_IMG from './assets/images.png'

const img = document.createElement('img')

img.className = 'image'
img.src = JS_IMG
document.body.append(img)