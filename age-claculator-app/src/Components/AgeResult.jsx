

const AgeResult = ({output}) => {
  return (
    <div className="result">
        <h1><span className="purple">{output.years === '' ? '--' : output.years} </span>{output.years === 1 ? 'year' :'years' } </h1>


        <h1><span className="purple">{output.months === '' ? '--' : output.months} </span>{output.months === 1 ? 'month' :'months' } </h1>


        <h1><span className="purple">{output.days === '' ? '--' : output.days} </span>{output.days === 1 ? 'day' :'days' } </h1>
      </div>
  )
}

export default AgeResult