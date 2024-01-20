type GreatProps = { name: string };

export const Great = (props: GreatProps ) => {
  return (
    <div>
      <h2>Moin Moin {props.name}!</h2>
    </div>
  );
}