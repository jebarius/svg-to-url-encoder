interface TitleInterface {
    title:string,
    classes?:string
    children?:any
}

const Title = ({title, classes = '', children}:TitleInterface) => {

    return (
        <div className="flex justify-between">
            <h3 className={`${classes} text-xl`}>{title}</h3>
            {children && children}
        </div>
    )
}

export default Title;