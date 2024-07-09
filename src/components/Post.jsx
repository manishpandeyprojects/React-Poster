// const names = ["Maximilian", "Manuel"];

function Post(props) {
  // const choosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div className="bg-white p-4 rounded min-w-52">
      <p>{props.author} </p>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
