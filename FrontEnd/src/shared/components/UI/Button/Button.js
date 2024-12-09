import './Button.css';
import { motion } from 'framer-motion';

//className='cta-white'|| 'button(default)' || 'red';

function Button({children , type='button', className = '',...props}){

    if(type === 'a'){
        return (
        <motion.button
         className={`ui-button ${className??null}`}
         {...props}
         whileHover={{scale: 1.02}}
         transition={{type: 'spring', stiffness: 500}}
         >
            {children}
        </motion.button>
        )
    }

    if(type === 'red'){
        return (
            <motion.button
             className={`ui-button ${className}`}
              {...props}
              whileHover={{scale: 1.02}}
              transition={{type: 'spring', stiffness: 500}}
              >
                {children}
            </motion.button>
            )
    }

    return (
        <motion.button
         className='ui-button'
         {...props}
         whileHover={{scale: 1.02}}
         transition={{type: 'spring', stiffness: 500}}
         >
            {children}
        </motion.button>
    )
}

export default Button;