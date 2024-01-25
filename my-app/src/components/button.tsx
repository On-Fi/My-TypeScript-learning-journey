type ButtonProps = { 
    handleClick: () => void;
        };

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick}>Click</button>
}