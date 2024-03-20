import { TitleInterface } from "../types";

const Title = ({title, classes = '', children}:TitleInterface) => {

    return (
        <div className="flex justify-between">
            <h3 className={`${classes} text-xl`}>{title}</h3>
            {children && children}
        </div>
    )
}

export default Title;