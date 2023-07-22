"use client"
import { FC } from "react"
import { ThreeDots } from "react-loader-spinner"


const Loading: FC = () => {

    return (
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
        />
    )
}

export default Loading