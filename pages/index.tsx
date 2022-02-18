import Head from 'next/head'
import Main from "../components/Main";
import Card from "../components/Card";
import data from '../data/coffee-stores.json'
export default function Home() {
    console.log(data)
  return (
      <>
        <head>
          <title>Coffe app</title>
        </head>
    <Main/>
          <div className={'grid gap-4 grid-cols-3 mx-20 mt-20'}>
          {data.map((item) => {
              return (
                  <Card title={item.name} imgUrl={item.imgUrl} url={item.websiteUrl}/>
              )
          })}
          </div>
      </>
  )
}
