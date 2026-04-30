import { useParams } from "react-router-dom";

function Unsubscribe() {
  const { token } = useParams();

  return (
    <div className="text-center mt-10">
      <h2>Unsubscribe Page</h2>
      <p>Token: {token}</p>
    </div>
  );
}

export default Unsubscribe;