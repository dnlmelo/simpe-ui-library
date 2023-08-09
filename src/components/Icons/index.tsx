import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

/**
 * Função que retorna um elemento com o ícone
 * @params name - nome do ícone
 **/
export const getIcons = (name:string) =>{
    return ( <FontAwesomeIcon icon={ name as IconName} />)
} 
