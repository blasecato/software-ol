interface Props {
  title: string
  text: string
  amount: number
  color: string
}

const CardColors = ({ title, text, amount, color }: Props) => {
  return (
    <div className="card-color" style={{ background: color }}>
      <p className="body-bold">{title}</p>
      <div>
        <h2 className="h2">{amount}</h2>
        <p className="body-regular">{text}</p>
      </div>
    </div>
  )
}

export default CardColors