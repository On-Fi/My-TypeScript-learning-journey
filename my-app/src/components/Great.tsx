type GreatProps = { 
name: string 
messageCount?: number
isLoggedIn: boolean
};

export const Great = (props: GreatProps ) => {
  return (
      <h2>
        {props.isLoggedIn ? `Moin Moin ${props.name} :) You have ${props.messageCount} unread messages` : 'Please log in'}
      </h2>
  );
}