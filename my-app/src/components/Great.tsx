type GreatProps = { name: string 
messageCount: number
isLoggedIn: boolean
};

export const Great = (props: GreatProps ) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn ? 'Moin Moin {props.name} :) You habe {props.messageCount} unread messages' : 'Please log in'}
      </h2>
    </div>
  );
}