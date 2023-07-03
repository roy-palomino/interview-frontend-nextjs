import { FC, useState, ChangeEvent } from "react";

import { listUsers } from "../services/userService";
import { User } from "../types";

import UserCard from "../components/UserCard";
import LoadingOverlay from "../components/LoadingOverlay";

const HomePage: FC = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [input, setInput] = useState("");
  const [regexError, setRegexError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function generateUsers(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (input === "" || loading) return;
    setLoading(true);
    try {
      const usersResponse = await listUsers(input);
      setUsers(usersResponse);
    } catch (error) {
      //toast.error("Error al listar los usuarios");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (!regex.test(value)) {
      setRegexError(true);
    }
    if (value === "" || regex.test(value)) {
      setRegexError(false);
      setInput(value);
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center p-10">
      <div className="w-full max-w-7xl border border-gray-200 rounded-xl p-8 shadow-lg flex flex-col h-full overflow-scroll bg-gray-50">
        <form onSubmit={generateUsers}>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-auto">
              <div>
                <label
                  htmlFor="userNumber"
                  className="block text-gray-700 text-sm leading-6"
                >
                  Cantidad de usuarios
                </label>
                <input
                  id="userNumber"
                  name="userNumber"
                  className="border border-gray-300 rounded-lg active:border-blue-500 focus:border-blue-500 focus:outline-none p-2 w-full md:w-auto"
                  onChange={handleInput}
                ></input>
                {regexError && (
                  <p className="text-red-500 text-sm absolute">
                    Por favor, ingrese números
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2 md:w-44 w-full md:ml-4 md:mb-0.5 block mt-4 bg-blue-500 text-white md:!mt-auto rounded-lg h-min font-semibold hover:bg-blue-600 hover:shadow-lg transition-all ${
                loading && "cursor-not-allowed"
              } ${loading && "!bg-blue-400"}`}
            >
              {loading ? "Generando..." : "Generar usuarios"}
            </button>
          </div>
          <hr className="my-8"></hr>
        </form>
        <div>
          {users.length == 0 ? (
            <p className="text-gray-400 text-center text-lg mt-32 cursor-default">
              Indique la cantidad de usuarios y haga click en "Generar usuarios"
            </p>
          ) : (
            <div>
              <div className="text-xs text-gray-600 mb-5">
                Mostrando {users.length} resultados:
              </div>
              <ul className="grid grid-cols-2">
                {users.map((user) => (
                  <UserCard
                    key={`${user.id.name}${user.id.value}${user.name.first}${user.name.last}`}
                    user={user}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
        <LoadingOverlay loading={loading} />
      </div>
    </div>
  );
};

export default HomePage;
