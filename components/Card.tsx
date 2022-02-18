import Image from 'next/image'
const Card = ({title,imgUrl,url}) => {
    return (
        <div className={'flex flex-col bg-white bg-opacity-10 text-center rounded-xl shadow-2xl'} >
        <h2 className={'text-xl p-2'}>{title}</h2>
            <div className={'p-4'}>
            <Image className={'rounded-xl object-cover'} src={imgUrl} height={400} width={700}/>
            </div>
        </div>

    )
}
export default Card