import {useState}  from 'react'

const onChangeSecurity = () => {

    //const [showpwd, setShowpwd] = useState(false)
    const [secureText, setSecureText] = useState(true)

    const onPassword = () => {
        //setShowpwd(!showpwd);
        setSecureText(!secureText)
    }

    return [ secureText, onPassword]

}

export default {
    onChangeSecurity
}