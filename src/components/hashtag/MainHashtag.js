import axios from "axios"
import { useEffect } from "react"

export default function MainHashtag({hashtag}) {

    useEffect(() => {
        const promise = axios.get(`http://localhost:4000/hashtag/${hashtag}`)

        promise.then((res) => {
            // console.log(res.data)
        })

        promise.catch((res) => {
            // console.log(res.responde.data);
        }
        )
    }, []);

    

    return (
        <h1>
        Hashtag
        </h1>
    )
}