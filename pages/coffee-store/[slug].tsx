import {useRouter} from "next/router";
import Link from 'next/link'

const CoffeeStore = () => {
    const router = useRouter()
    const query = router.query.slug
    console.log(query)
    return (
        <div>
            <Link href={'/'}> <a>back to home </a></Link>
            <h1>coffees {query}</h1>
        </div>
    )
}
export default CoffeeStore