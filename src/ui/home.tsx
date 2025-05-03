import CreateUser from "../features/user/create-user";

function Home() {
  return (
    <div className="mt-2 text-center">
      <h1 className="mb-4 text-xl font-semibold text-stone-800">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>

      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
