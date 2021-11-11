import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item,
    taskDone: (id: number, done: boolean) => void
}

export const ListItem = ({ item, taskDone } : Props) => {

    return (
        <C.Container done={item.done}>
           <input 
                type="checkbox" 
                checked={item.done}
                onChange={e => taskDone(item.id, e.target.checked)} 
           />
           <label>{ item.name } - ({ item.done.toString() })</label>
        </C.Container>
    );
}