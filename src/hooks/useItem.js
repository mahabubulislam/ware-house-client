import { useEffect, useState } from "react"

const useItems = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('https://peaceful-dawn-20015.herokuapp.com/items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
            
    }, [])
    return {items, setItems, loading}
}

export default useItems