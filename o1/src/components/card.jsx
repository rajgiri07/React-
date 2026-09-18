function Card(props) {
    return (
         <div className="card">
            <img src={props.img} alt="image" />
            <h1>{ props.user}</h1>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Id dolorum sit ab eveniet laborum consequuntur autem,
                obcaecati itaque!</p>
             <button> View Profile</button>
        </div>
     );
}

export default Card;