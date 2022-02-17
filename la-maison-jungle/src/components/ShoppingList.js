import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'


function ShoppingList(){
    return (
        <div>
            <ul className='lmj-plant-list'>
                    {plantList.map(({ id,cover,name,water,light})=>(
                        <PlantItem
                        key={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />

                ))}
            </ul>
        </div>
    )
}     

export default ShoppingList