import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

/**
 * Função que retorna um elemento com o ícone
 * @params name - nome do ícone
 **/
export const getIcons = (name:string, position?:string) =>{
    position = position? `icon-${position} `: ''

    return ( <FontAwesomeIcon className={`icon ${position}`} icon={ name as IconName} />)
} 
