import { useEffect, useState } from 'react';
import Button from "../../../../shared/index";
import Api from "../../../../shared/api";
import { usersType } from "../../../../shared/TypeUsers";
import { useAtom, useAtomValue } from "jotai";
import { usersAtom } from "../../../../shared/jotai/usersAtom";
import Cards from "../../../../entities/index";

export default function UserData() {
  const [users, setUsers] = useState<usersType[]>([]);
  const userDataAtom = useAtomValue(usersAtom);
  const [userEdit, setUserEdit] = useState<{ [key: number]: boolean }>({});
  const [titleForBtns, setTitleForBtns] = useState<{ [key: number]: string }>({});
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    const usersLocal = async () => {
      const localStorageData = localStorage.getItem("users");
      if (localStorageData) {
        setUsers(JSON.parse(localStorageData));
        const editState: { [key: number]: boolean } = {};
        const titleState: { [key: number]: string } = {};
        JSON.parse(localStorageData).forEach((user: usersType) => {
          editState[user.id] = false;
          titleState[user.id] = "EDIT";
        });
        setUserEdit(editState);
        setTitleForBtns(titleState);
      } else {
        try {
          const usersData = await Api();
          setUsers(usersData);
          const editState: { [key: number]: boolean } = {};
          const titleState: { [key: number]: string } = {};
          usersData.forEach((user: usersType) => {
            editState[user.id] = false;
            titleState[user.id] = "EDIT";
          });
          setUserEdit(editState);
          setTitleForBtns(titleState);
          localStorage.setItem("users", JSON.stringify(usersData));
        } catch (error) {
          console.log(error);
        }
      }
    };

    usersLocal();

  }, []);

  const editUsers = (userId: number) => {
    setUserEdit(prevState => ({
      ...prevState,
      [userId]: !prevState[userId],
    }
  ));
    setTitleForBtns(prevTitles => ({
      ...prevTitles,
      [userId]: prevTitles[userId] === "EDIT" ? "SAVE" : "EDIT",
    }));
    if (titleForBtns[userId] === "SAVE") {
      saveChanges(userId);
      setPhone("");
      setEmail("");
      setName("");

      if(name.length <= 0) {
        alert("введи данные в name");
    } else if(email.length <= 0) {
        alert("введи данные в email");
    } else if(phone.length <= 0) {
        alert("введи данные в phone");
    }
    }
  };

  const saveChanges = async (userId: number) => {
    try {
      const updatedUsers = users.map(user => {
        if (user.id === userId) {
          return { ...user, name, email, phone };
        } else {
          return user;
        }
      });
      setUsers(updatedUsers);
      setUserEdit(prevState => ({
        ...prevState,
        [userId]: false,
      }));
      setTitleForBtns(prevTitles => ({
        ...prevTitles,
        [userId]: "EDIT",
      }));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUsers = (userId:number):void => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem("users" , JSON.stringify(updatedUsers));
  }

  return (
    <aside>
      {users.length === 0 ? (
        <Button onClick={async () => {
          try {
            const usersData = await Api();
            setUsers(usersData);
            const editState: { [key: number]: boolean } = {};
            const titleState: { [key: number]: string } = {};
            usersData.forEach((user: usersType) => {
              editState[user.id] = false;
              titleState[user.id] = "EDIT";
            });
            setUserEdit(editState);
            setTitleForBtns(titleState);
            localStorage.setItem("users", JSON.stringify(usersData));
          } catch (error) {
            console.log(error);
          }
        }}>Load Users</Button>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {userEdit[user.id] ? (
                <main>
                  <input type="text" placeholder={user.name} onChange={e => setName(e.target.value)} value={name} />
                  <input type="text" placeholder={user.email} onChange={e => setEmail(e.target.value)} value={email} />
                  <input type="text" placeholder={user.phone} onChange={e => setPhone(e.target.value)} value={phone} />
                </main>
              ) : (
                <Cards name={user.name} email={user.email} phone={user.phone} />
              )}
              <Button onClick={() => editUsers(user.id)}>
                {titleForBtns[user.id]}
              </Button>
              <Button onClick={() => deleteUsers(user.id)}>Delete</Button>
              <br />
              <br />
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
