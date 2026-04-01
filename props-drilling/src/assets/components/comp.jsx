function Card(prop) {
  console.log(prop);
  return (
    <div className="parent">
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1764533873501-bee26e5ea0f6?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1>Hi, I am {prop.user}</h1>
        <p>I am a coder and i am {prop.age} years old</p>
        <button>Click me</button>
      </div>
    </div>
  );
}

export default Card;
