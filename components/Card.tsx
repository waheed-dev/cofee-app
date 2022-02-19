import Image from 'next/image'
import Link from 'next/link'
const Card = ({title,imgUrl,url,id}) => {
    return (
        <Link href={`/coffee-store/${id}`}><a>
            <div className={'flex flex-col bg-white bg-opacity-10 text-center rounded-xl shadow-2xl'} >
        <h2 className={'text-xl font-bold p-2'}>{title}</h2>
            <div className={'p-4'}>
            <Image className={'rounded-xl object-cover'} src={imgUrl} height={500} width={700}/>
            </div>
        </div>
            </a></Link>

    )
}
export default Card