export interface BadgeProps {
    /** Texto do Badge */
    text: string

    /** Tamanho do botão. O tamanho "normal" é o padrão*/
    size?:'sm' | 'md'

   /** Cor do tema a ser aplicado  */
   color: 
   'attention' |
   'attention-light' |
   'primary' | 
   'primary-light' | 
   'white' | 
   'critical' | 
   'critical-light' | 
   'info' | 
   'info-light' |
   'success'| 
   'success-light'
}