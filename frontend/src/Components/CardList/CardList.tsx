import React from 'react'
// Component imports
import Card from '../Card/Card'

// Style imports
import './CardList.css'

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPL' price={100} />
        <Card companyName='Microsoft' ticker='MSFT' price={200} />
        <Card companyName='Tesla' ticker='TSLA' price={300} />
    </div>
  )
}

export default CardList