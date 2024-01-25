type ContainerProps = {
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
    return <div style={props.styles} >Random text in a Container</div>};