import { Fragment } from "react"


export const FadeInSquares = ({children}) => {
    return (
        <Fragment>
            <ul className="fade-in-squares">
                <li className="square" />
                <li className="square" />
                <li className="square" />
                <li className="square" />
                <li className="square" />
                <li className="square" />
                {children}
            </ul>
        </Fragment>
    )
}