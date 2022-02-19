import {useRouter} from "next/router";
import Link from 'next/link'
import data from '../../data/coffee-stores.json'
import Image from "next/image";
import {useState} from "react";
const CoffeeStore = ({coffeeData}) => {
    const [upvote, setUpvote] = useState(0);
    console.log(coffeeData)
    return (
        <div className={'mx-20 mt-20'}>
            <Link href={'/'} ><a className={'text-xl font-bold'}>back to home </a></Link>
                <h1 className={'text-5xl mb-6 mt-6'}>{coffeeData.name}</h1>
            <div className={'flex mt-5 gap-10'}>
            <Image src={coffeeData.imgUrl} className={'rounded-xl object-cover'} width={500} height={400}/>
                <div className={'self-center w-max bg-white bg-opacity-10 rounded-xl py-20 px-4'}>
                    <h1 className={'text-3xl '}>{coffeeData.address}</h1>
                    <h1 className={'text-xl text-center my-4 '}>{upvote} upvote</h1>
                    <div className={'flex justify-center'}>

                   <button onClick={()=> setUpvote(upvote + 1)} className={'px-10 py-2 bg-blue-700 hover:bg-blue-900 rounded-2xl text-white'}>upvote</button>
                    </div>

                </div>

            </div>
        </div> )

}
export default CoffeeStore

export async function getStaticProps ({params}) {
    return {
        props : {
            coffeeData : data.find((store => {
              return store.id.toString() === params.slug
            }))
        }
    }
}
export async function getStaticPaths () {
    const paths = data.map(store => {
        return {
            params : {
                slug : store.id.toString()
            }
        }
    })
    return {
        paths,
        fallback : false
    }
}