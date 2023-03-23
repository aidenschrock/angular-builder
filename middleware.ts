import { RequestCookies } from '@edge-runtime/cookies'


export default function middleware(request: any) {
// if visited cookie doesn't exist, setcookie
const cookies = new RequestCookies(request.headers)
if (!cookies.has('visited')) {
cookies.set('visited', 'true')

} else {
    // append query parms to URL 
    let url = new URL(request.url)
    url.searchParams.append('returningcustomer', 'true');
    console.log(url)
}
console.log(cookies)
}