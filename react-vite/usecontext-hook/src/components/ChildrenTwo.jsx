import useAppContext from "../hook/useAppContext";

export default function ChildrenTwo() {
  const { setName } = useAppContext();
  return (
    <button onClick={() => setName("Carlinhos da massa")}>
      Clica para mudar nome
    </button>
  );
}
