import { fetchCategories } from "@/app/lib/DataFormalities";
import { fetchAreas } from "@/app/lib/DataAreas";
import Search from "./Search";
import Select from "./Select";

export default async function FormalitiesFilters() {
  const categories = await fetchCategories();
  const areas = await fetchAreas();
  areas.map((area) => {
    if (area.order == -1) {
      area.order = 9999;
    }
  });
  areas.sort((a, b) => a.order - b.order);
  return (
    <div className="formalities-filters">
      <div className="row">
        <div className="col-md-4">
          <h5>Búsqueda Avanzada</h5>
          <Search placeholder={`Buscar...`} />
        </div>
        <div className="col-md-4">
          <h5>Áreas</h5>
          <Select
            data={areas}
            collection="area"
            placeholder="Todas las áreas"
          />
        </div>
        <div className="col-md-4">
          <h5>Categorías</h5>
          <Select
            data={categories}
            collection="category"
            placeholder="Todas las categorías"
          />
        </div>
      </div>
    </div>
  );
}
