import {ReactComponent as AddIcon} from './plus.svg'
import  {ButtonAdd } from './BtnAddTransaction.styled'


export default function ButtonAddTransaction({onClick}){

return(
    <ButtonAdd type="button" onClick={onClick}>
        <AddIcon width='20' height='20' fill='#ffffff'/>
    </ButtonAdd>
)
}