import { useState } from "react"
import axios from 'axios'


const useFetch = (url) => {

    const [infoApi, setInfoApi] = useState()
    const [hasError, setHasError] = useState(false)

    const getApi = () => {
        axios.get(url)
        .then(res => {
            setInfoApi( res.data)
            setHasError(false)
        })
        .catch(err => {
            console.log(err)
            setHasError(false)
        })
    }
    
    return[ infoApi, getApi, hasError ]
}

export default useFetch