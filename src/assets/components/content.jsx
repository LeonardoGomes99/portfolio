import { Fragment } from "react"

export const Content = ({ children }) => {
    return (
        <Fragment>
            <div className="content">
                {children}
            </div>
        </Fragment>
    )
}