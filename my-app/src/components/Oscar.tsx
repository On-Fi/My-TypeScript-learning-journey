type OscarProps = { children: React.ReactNode }; // React.ReactNode is a type that describes any possible React node (component, string, number, fragment, etc.)

export const Oscar = (props : OscarProps) => {
    return (
        <div>{props.children}</div>
    )
}