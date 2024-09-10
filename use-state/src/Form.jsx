import { useCallback, useState } from "react";

export function Form() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);
  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const handleClick = useCallback(() => {
    setAge((preAge) => preAge + 1);
  }, []);
  return (
    <>
      <input value={name} onChange={handleChange} />
      <button onClick={handleClick}>Increment age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
}

export function FormObject() {
  const [form, setForm] = useState({
    firstName: "Minh",
    lastName: "Nguyen",
    email: "minh@gm.com",
  });
  const handleChangeName = useCallback(
    (e) => {
      setForm((preState) => ({ ...preState, firstName: e.target.value }));
    },
    [setForm]
  );
  const handleChangeEmail = useCallback(
    (e) => {
      setForm((preState) => ({ ...preState, email: e.target.value }));
    },
    [setForm]
  );
  const handleChangeLastName = useCallback(
    (e) => {
      setForm((preState) => ({ ...preState, lastName: e.target.value }));
    },
    [setForm]
  );
  return (
    <>
      <label>
        First name:
        <input value={form.firstName} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        Last name:
        <input value={form.lastName} onChange={handleChangeLastName} />
      </label>
      <br />
      <label>
        Email:
        <input value={form.email} onChange={handleChangeEmail} />
      </label>
      <p>{form.firstName}</p>
      <p>{form.lastName}</p>
      <p>({form.email})</p>
    </>
  );
}

export function FormNestedObject() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handleChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        setPerson((preState) => ({
          ...preState,
          [parent]: {
            ...preState[parent],
            [child]: e.target.value,
          },
        }));
      } else {
        setPerson((preState) => ({ ...preState, [name]: e.target.value }));
      }
    },
    [setPerson]
  );
  return (
    <>
      <label>
        Name:
        <input name="name" value={person.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Title:
        <input
          name="artwork.title"
          value={person.artwork.title}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        City:
        <input
          name="artwork.city"
          value={person.artwork.city}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Image:
        <input
          name="artwork.image"
          value={person.artwork.image}
          onChange={handleChange}
        />
      </label>

      <section>
        <p>
          {person.artwork.title} by {person.name}
        </p>
        <p>({person.artwork.city})</p>
        <div>
          <img src={person.artwork.image} alt={person.artwork.title} />
        </div>
      </section>
    </>
  );
}


