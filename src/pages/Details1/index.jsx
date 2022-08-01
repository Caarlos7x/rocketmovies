import { Container } from './styles'
import { Tag } from '../Tag'
import { PositiveRatings, NegativeRatings } from '../Ratings'
import { FiClock } from 'react-icons/fi'

export function Details({data, ...rest}){
  return(
    <Container {...rest} >
      <header>
        <div divName="header">
          <h1>{data.title}</h1>
          <div>
            <PositiveRatings title={data.rating}/>
            <NegativeRatings title={data.rating}/>
          </div>
        </div>
      </header>
      <div className="autor">
        <div> <img src="https://github.com.br/caarlos7x.png" alt="foto de carlos augusto" />
          Por<span>{data.autor}</span>
        </div>
        <div>
          <FiClock/><span>{data.created_at}</span>
        </div>
      </div>
      {
        data.tags &&
        <div className="tags">
         {
          data.tags.map(tag => <Tag Key = {tag.id} title = {tag.name} />)
         } 
        </div>
      }
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        dolor, recusandae debitis aut deserunt natus minus mollitia
        voluptate dolorem vel fuga provident sit voluptatem quidem eos
        optio magni, iste pariatur.
      </p>
    </Container>
  )
}
