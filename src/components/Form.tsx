import { categories } from "../data/categories"

export default function Form() {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoría:</label>

        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          name=""
          id="category"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">Actividad:</label>

        <input
          className="border border-slate-300 p-2 rounded-lg"
          type="text"
          name="activity"
          id="activity"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorías:</label>

        <input
          className="border border-slate-300 p-2 rounded-lg"
          type="number"
          name="calories"
          id="calories"
          placeholder="Calorías. ej. 300 ó 500"
        />
      </div>

      <input
        className="bg-gray-800 hover:bg-gray-700 w-full p-2 font-bold uppercase text-white cursor-pointer"
        type="submit"
        value='Guardar Comida o Guardar Ejercicio'
      />
    </form>
  );
};
