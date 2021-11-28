import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext.js";

function Apply() {
  const { getUser } = useContext(AuthContext);
  const [result, setResult] = useState(undefined);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const cleanData = Object.entries(data).reduce((a, [k, v]) => {
      a[k] = v.trim();
      return a;
    }, {});

    if (Object.values(cleanData).includes("")) {
      alert("please fill out all fields");
      return;
    }

    if (isNaN(cleanData.amount)) {
      alert("Please input your required amount ");
      return;
    }

    if (isNaN(cleanData.duration)) {
      alert("Please input the appropriate duration in number of days");
      return;
    }

    const user = getUser();
    console.log(user);

    fetch("http://localhost:3050/credit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user.username,
        amount: cleanData.amount,
        duration: cleanData.duration,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setResult(r.desicion);
      })
      .catch((e) => alert(e));
  };

  return (
    <section className="apply">
      <div>
        <h1>Apply now!</h1>
        <form method="post" onSubmit={onSubmit}>
          <label htmlFor="product">Product</label>
          <input type="text" name="product" id="product" />
          <label htmlFor="amount">Amount</label>
          <input type="text" name="amount" id="amount" />
          <label htmlFor="duration">Duration</label>
          <input type="number" name="duration" id="duration" />
          <input type="submit" value="apply" />
        </form>
      </div>
      {result === undefined ? (
        ""
      ) : (
        <div>
          <section className="result">
            {result === 1 ? <h1>YES</h1> : result === 0 ? <h1>Maybe</h1> : <h1>No</h1>}
          </section>
        </div>
      )}
    </section>
  );
}

export default Apply;
