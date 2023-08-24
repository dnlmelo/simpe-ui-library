import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconProps } from './Icon.types';

library.add(fas);

export function Icon(props:IconProps) {
    return <FontAwesomeIcon className='icon' icon={ props.name as IconName} />
}