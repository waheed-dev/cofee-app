import Head from 'next/head'
import Main from "../components/Main";
import Card from "../components/Card";
import data from '../data/coffee-stores.json'
export default function Home({tempData}) {
    console.log(tempData)
  return (
      <>
        <head>
          <title>Coffe app</title>
        </head>
    <Main/>
          <div className={'grid gap-4 grid-cols-3 mx-20 mt-20 mb-20'}>
          {tempData.map((item) => {
              return (
                  <Card id={item.id} title={item.name} imgUrl={item.imgUrl} url={item.websiteUrl}/>
              )
          })}
          </div>
      </>
  )
}
export async function getStaticProps () {
    return {
        props : {
      tempData : data
        }
    }
}
