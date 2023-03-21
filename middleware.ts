import { RequestCookies } from '@edge-runtime/cookies'

export default function middleware(request: any) {
// if visited cookie doesn't exist, setcookie
const cookies = new RequestCookies(request.headers)
if (!cookies.has('visited')) {
cookies.set('visited', 'true')
}
console.log(cookies)
}