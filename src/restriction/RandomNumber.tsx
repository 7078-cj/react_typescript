type RandomNumberType = {
    value: number
}
//RandomNumberType & this tells that it inherits the type of 
// randomnumbertypes and add this additional types
type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type Zero = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

function RandomNumber({value, isPositive, isNegative, isZero}: RandomNumberProps) {
  return (
    <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
        {isZero && 'zero'}
    </div>
  )
}

export default RandomNumber