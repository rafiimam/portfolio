'use-client'
import { motion } from 'framer-motion'

export default function AnimationWrapper({
    children,
    className,
    ...props
}){
    return <motion.div>
        {children}
    </motion.div>
}