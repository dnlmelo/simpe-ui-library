import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconProps } from './Icon.types';
import './icon.scss'

library.add(fas);

export const Icon = (props:IconProps) =>{
    return(
    <span 
        className={ 
            `icon icon-size-${props.size} 
            icon-color-${props.color || 'normal'}` 
        }
        {...props}
    >
        <FontAwesomeIcon 
        icon={ props.name as IconName} />
    </span>)
}