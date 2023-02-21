type AppIconProps = {
    name: string,
    color?:string,
}

const AppIcon = ({name,color='#B6923E'}: AppIconProps) => {
    return (
        <>
            <span className="material-symbols-outlined">{name}</span>
            <style jsx>
                {`
                  .material-symbols-outlined {
                    color: ${color}
                  }
                `}

            </style>
        </>
    )
}
export default AppIcon;