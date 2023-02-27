import {memo} from "react";

type AppIconProps = {
    name: string,
    color?: string,
    size?: number
}

const AppIcon = ({name, color = '#B6923E !important', size = 2}: AppIconProps) => {
    return (
        <>
            <span className="material-symbols-outlined">{name}</span>
            <style jsx>
                {`
                  .material-symbols-outlined {
                    color: ${color};
                    font-size: ${size}rem;
                  }
                `}

            </style>
        </>
    )
}
export default memo(AppIcon);