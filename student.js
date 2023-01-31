const Student = (props) => {
    const { name ,id,marks } = props;
    return (
      <article className="info">
        <h1>{name}</h1>
        <h2>{id}</h2>
        <h3>{marks} </h3>
      </article>
    );
  };
  
  export default Student;