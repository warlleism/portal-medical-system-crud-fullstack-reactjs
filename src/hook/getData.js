import { useState } from "react";

const useGetData= (param) => {
    const [data, setData] = useState(() => {
        
        fetch(param)
            .then((res) => res.json())
            .then((data) => setData(data))
    })

    return [data]
};

export default useGetData;